const Component = require('../observable-yo/component')

const yo = require('yo-yo')
const {action} = require('mobx')

const mappedElement = require('./mapped-element')
const corners = require('./corners')


function render (state) {
  const {frames, selected} = state

  return yo`
    <div>
      ${frames.map(mappedElement)}
      <div
        class="list"
        style="color: white; position: absolute; top: 0; right: 0;"
      >
        ${frames.map(
          function (frame, index) {
            return yo`<div onclick=${
                action(function () {
                  state.selected = index
                })
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
}

module.exports = function (state, parent) {
  return new Component(render, state, parent)
}
