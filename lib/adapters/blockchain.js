var https = require('https')
var request = require('request')
var URL = require('url')

function Blockchain() {
  this.url = 'https://blockchain.info?cors=true&format=json'
}

Blockchain.prototype.getBlockHeight = function(callback) {
  var url = URL.parse(this.url)
  url.pathname = '/latestblock'
  request({url: url.format(), json: true}, function(error, response, body) {
    if(!error && response.statusCode == 200)
      callback(body['block_index'])
  })
}

module.exports = Blockchain