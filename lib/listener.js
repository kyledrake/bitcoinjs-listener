var bitcoin = require('bitcoinjs-lib')
var bs58check = require('bs58check')

function Listener(opts) {
	this.opts = opts
	this.addresses = []
}

Listener.prototype.add = function(addr) {
	var newAddr = []
	var self = this

	if(typeof addr == 'string')
		newAddr.push(addr)
	else if(Array.isArray(addr))
		newAddr = addr
	else
		throw new Error('input must be address string or array')

	newAddr.forEach(function(a) {
		try {
			bs58check.decode(a)
		} catch(e) {
			if(e.message.match(/Invalid checksum/))
				throw new Error('Invalid address: '+a)
			throw e
		}

		if(self.addresses.indexOf(a) == -1)
			self.addresses.push(a)
	})	
}

module.exports = Listener