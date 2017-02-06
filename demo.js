const app = require('./src/components/mapper')

const initialState = {
  frames: [
    {
      type: 'iframe',
      src: 'https://player.vimeo.com/video/38103181',
      width: 640,
      height: 360,
      corners: [
        {x: 50, y: 75},
        {x: 450, y: 100},
        {x: 450, y: 400},
        {x: 25, y: 450},
      ],
    },
    {
      type: 'img',
      src: 'http://meemoo.org/css/img/logo.png',
      width: 600,
      height: 144,
      corners: [
        {x: 450, y: 100},
        {x: 650, y: 50},
        {x: 650, y: 450},
        {x: 450, y: 400},
      ],
    },
  ],
  selected: 1,
}

document.body.style.backgroundColor = 'black'

app(initialState, document.body)
