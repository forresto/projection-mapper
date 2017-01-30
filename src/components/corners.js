const yo = require('yo-yo')


function corner (index, x, y, title, item) {
  function onDrag (event) {
    if (event.x === 0) return
    item['x' + index] = event.x
    item['y' + index] = event.y
  }
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
        cursor: pointer;
      "
      draggable="true"
      ondrag=${onDrag}
    >
      +
    </div>
  `
}

function corners (item) {
  const {x1, y1, x2, y2, x3, y3, x4, y4} = item
  return yo`
    <div class="corners">
      ${corner('1', x1, y1, '1: top-left', item)}
      ${corner('2', x2, y2, '2: top-right', item)}
      ${corner('3', x3, y3, '3: bottom-right', item)}
      ${corner('4', x4, y4, '4: bottom-left', item)}
    </div>
  `
}

module.exports = corners
