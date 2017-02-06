const el = require('yo-yo').createElement
const domcss = require('dom-css')
const {matrix3d} = require('../projection-mapping/projection-mapping')

function mappedElement (item) {
  const {type, src, width, height, corners} = item

  const element = el(type, {
    src,
    width,
    height,
    border: 0,
  })

  domcss(element, {
    border: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    transformOrigin: '0 0',
    transform: matrix3d(
      width, height,
      corners[0].x, corners[0].y,
      corners[1].x, corners[1].y,
      corners[2].x, corners[2].y,
      corners[3].x, corners[3].y
    ),
  })

  return element
}

module.exports = mappedElement
