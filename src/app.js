const yo = require('yo-yo')
const {observable, autorun} = require('mobx')

const mappedElement = require('./components/mapped-element')
const corners = require('./components/corners')


let mounted

const state = observable({
  frames: [],
  selected: null,
})

function select (index) {
  state.selected = index
}

const render = autorun(
  function () {
    console.log('autorun')
    const {frames, selected} = state

    const el = yo`
      <div>
        ${frames.map(mappedElement)}
        <div
          class="list"
          style="color: white; position: absolute; top: 0; right: 0;"
        >
          ${frames.map(
            function (frame, index) {
              return yo`<div onclick=${
                  function () { select(index) }
                }>
                ${(index === selected) ? '🍍 ' : ''}
                ${frame.src}
              </div>`
            }
          )}
        </div>
        ${selected != null ? corners(frames[selected]) : ''}
      </div>
    `

    if (mounted) {
      console.log('update')
      yo.update(mounted, el)
    }
  }
)

exports.init = function (initialFrames, mount) {
  if (!mount) {
    mount = yo`<div></div>`
    document.body.appendChild(mount)
  }
  mounted = mount
  state.frames = initialFrames

  window.state = state
  console.log('init', state)
}
