'use strict'

var arrify = require('arrify')

module.exports = function bigClick (selectors, size) {
  selectors = arrify(selectors)
  var res = {}

  res[selectors.join(', ')] = {
    position: 'relative'
  }

  var offset = -1 * size + 'px'
  res[selectors.map(after).join(', ')] = {
    content: "''",
    position: 'absolute',
    left: offset,
    top: offset,
    bottom: offset,
    right: offset
  }

  return res
}

function after (selector) {
  return selector + ':after'
}
