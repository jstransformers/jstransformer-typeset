'use strict'

var typeset = require('typeset')

exports.name = 'typeset'
exports.outputFormat = 'html'

exports.render = function (str, options) {
  return typeset(str, options)
}
