var https = require('https')
var request = require('request');

var bitpay = {
  endpoint: "https://bitpay.com/api/rates",

  getRates: function(callback) {
    request.get({url: this.endpoint, json: true}, function (error, response, body) {
      if (error || response.statusCode != 200)
        return

      var rates = {};

      for (var i=0; i < body.length; i++) 
        rates[body[i].code] = body[i].rate

      callback(rates)
    })
  }
}

module.exports.bitpay = bitpay
