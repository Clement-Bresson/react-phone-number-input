'use strict'

var metadata = require('libphonenumber-js/metadata.min.json')
var core = require('../core/index.commonjs')
var createPhoneInput = require('../commonjs/PhoneInputNativeDefaults').createPhoneInput

function call(func, _arguments) {
	var args = Array.prototype.slice.call(_arguments)
	args.push(metadata)
	return func.apply(this, args)
}

var PhoneInput = createPhoneInput(metadata)

exports = module.exports = PhoneInput

exports.parsePhoneNumber = function parsePhoneNumber() {
	return call(core.parsePhoneNumber, arguments)
}

exports.formatPhoneNumber = function formatPhoneNumber() {
	return call(core.formatPhoneNumber, arguments)
}

exports.formatPhoneNumberIntl = function formatPhoneNumberIntl() {
	return call(core.formatPhoneNumberIntl, arguments)
}

exports.isValidPhoneNumber = function isValidPhoneNumber() {
	return call(core.isValidPhoneNumber, arguments)
}

exports.parseRFC3966 = core.parseRFC3966
exports.formatRFC3966 = core.formatRFC3966

exports['default'] = PhoneInput