const {observable, autorun, useStrict} = require('mobx')
const {update} = require('yo-yo')

useStrict(true)

class Component {
  constructor (render, state, parent) {
    this.mounted = null
    this.state = observable(state)
    this.render = autorun(
      () => {
        const el = render(this.state)
        if (this.mounted) {
          update(this.mounted, el)
        } else {
          this.mounted = el
          parent.appendChild(el)
        }
      }
    )
  }
}

module.exports = Component
