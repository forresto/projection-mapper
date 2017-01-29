const yo = require('yo-yo')

function corner (x, y, title) {
  return yo`
    <div
      title="${title}"
      style="
        background-color: white;
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 1rem;
        height: 1rem;
        text-align: center;
      "
    >
      +
    </div>
  `
}

function corners (item) {
  const {x1, y1, x2, y2, x3, y3, x4, y4} = item
  return yo`
    <div class="corners">
      ${corner(x1, y1, '1: top-left')}
      ${corner(x2, y2, '2: top-right')}
      ${corner(x3, y3, '3: bottom-right')}
      ${corner(x4, y4, '4: bottom-left')}
    </div>
  `
}

module.exports = corners
