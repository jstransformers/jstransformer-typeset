'use strict'

const typeset = require('typeset')

exports.name = 'typeset'
exports.outputFormat = 'html'

exports.render = function (input, options) {
  return typeset(input, options)
}
