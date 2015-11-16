'use strict'

var toCss = require('to-css')
var create = require('./')

module.exports = function (selectors, size) {
  return toCss(create(selectors, size))
}
