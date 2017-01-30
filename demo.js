const {init} = require('./src/app')

let frames = [
  {
    type: 'iframe',
    src: 'https://player.vimeo.com/video/38103181',
    width: 640,
    height: 360,
    x1: 50,
    y1: 75,
    x2: 450,
    y2: 100,
    x3: 450,
    y3: 400,
    x4: 25,
    y4: 450,
  },
  {
    type: 'img',
    src: 'http://meemoo.org/css/img/logo.png',
    width: 600,
    height: 144,
    x1: 450,
    y1: 100,
    x2: 650,
    y2: 50,
    x3: 650,
    y3: 450,
    x4: 450,
    y4: 400,
  },
]

document.body.style.backgroundColor = 'black'

init(frames)
