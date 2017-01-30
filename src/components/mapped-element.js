const el = require('yo-yo').createElement
const domcss = require('dom-css')
const {matrix3d} = require('../projection-mapping/projection-mapping')

function mappedElement (item) {
  const {type, src, width, height, x1, y1, x2, y2, x3, y3, x4, y4} = item

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
    transform: matrix3d(width, height, x1, y1, x2, y2, x3, y3, x4, y4),
  })

  return element
}

module.exports = mappedElement
