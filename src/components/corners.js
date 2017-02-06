const yo = require('yo-yo')
const {action} = require('mobx')


function dragCorner (corner, index, onDrag) {
  return yo`
    <div
      title="corner ${index}"
      style="
        background-color: white;
        position: absolute;
        left: ${corner.x}px;
        top: ${corner.y}px;
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

function dragCorners (item) {
  const {corners} = item
  return yo`
    <div class="corners">
      ${corners.map(function (corner, index) {
        const dragIndex = action(
          function (event) {
            const {x, y} = event
            if (x === 0) return
            corners[index].x = x
            corners[index].y = y
          }
        )
        return dragCorner(corner, index, dragIndex)
      })}
    </div>
  `
}

module.exports = dragCorners
