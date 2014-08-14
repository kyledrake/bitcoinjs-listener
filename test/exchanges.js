var assert = require('assert')
var https = require('https')
var fakeweb = require('node-fakeweb')
var exchanges = require('../lib/exchanges')
var mockRates = require('./exchanges.rates')

//fakeweb.allowNetConnect = false;

describe('BitPay', function() {

  it('should return a mapping of rates', function(done) {
    fakeweb.registerUri({uri: exchanges.bitpay.endpoint, body: mockRates})
    exchanges.bitpay.getRates(function(rates) {
      assert.equal(rates.USD, 587.28)
      done()
    })
  })
})
