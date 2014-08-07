var assert = require('assert')
var Listener = require('../lib/listener')

describe('add', function() {
	it('adds address', function() {
		var listener = new Listener()
		var addr = '1HRiAtD4zFv3rMuqNBLjCaeB5sv2G49qCB'
		listener.add(addr)
		assert.deepEqual(listener.addresses, [addr])
	})

	it('fails for bad address', function() {
		var listener = new Listener()
		assert.throws(function() { listener.add('derp') }, /Invalid address/)
	})

	it('adds for array', function() {
		var addrs = [
			'1Kfim7Jc4cE2YZoshAHzT5MyaCHDc84Tu1', 
			'1NeSda9xQxEfdL4iYq1nUySgbURTcsKQfF'
		]

		var listener = new Listener()
		listener.add(addrs)
		assert.deepEqual(listener.addresses, addrs)
	})

	it('fails for bad address in array', function() {
		var addrs = [
			'1Kfim7Jc4cE2YZoshAHzT5MyaCHDc84Tu1', 
			'derp'
		]

		var listener = new Listener()
		assert.throws(function() { listener.add('derp') }, /Invalid address/)
	})
})