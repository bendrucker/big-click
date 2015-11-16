'use strict'

var test = require('tape')
var click = require('./')

test(function (t) {
  t.deepEqual(click('button', 10), {
    button: {
      position: 'relative'
    },
    'button:after': {
      content: "''",
      position: 'absolute',
      left: '-10px',
      right: '-10px',
      top: '-10px',
      bottom: '-10px'
    }
  })

  t.end()
})
