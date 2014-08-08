var assert = require('assert')
var Blockchain = require('../../lib/adapters/blockchain')

describe('Blockchain', function() {
	describe('getBlockHeight', function() {
		it('returns latest', function(done) {
			var blockchain = new Blockchain()
			blockchain.getBlockHeight(function(height) {
				assert(height > 454740)
				done()
			})
		})
	})
})