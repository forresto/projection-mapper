const {observable, autorun, useStrict} = require('mobx')
const {update} = require('yo-yo')

useStrict(true)

class Component {
  constructor (render, state) {
    this.el = null
    this.state = observable(state)
    this.render = autorun(() => {
      const element = render(this.state)
      if (this.el) {
        update(this.el, element)
      } else {
        this.el = element
      }
    })
  }
}

module.exports = Component
