const {matrix3d} = require('../projection-mapping/projection-mapping')

function mappedElement (item) {
  const {type, src, width, height, x1, y1, x2, y2, x3, y3, x4, y4} = item

  const el = document.createElement(type)
  el.src = src
  el.width = width
  el.height = height
  el.style.position = 'absolute'
  el.style.top = 0
  el.style.left = 0
  el.style.transform = matrix3d(width, height, x1, y1, x2, y2, x3, y3, x4, y4)
  el.style.transformOrigin = '0 0'

  return el
}

module.exports = mappedElement
