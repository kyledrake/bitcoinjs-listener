var https = require('https')

function Blockchain() {
	this.url = 'https://blockchain.info'
}

Blockchain.prototype.getBlockHeight = function(callback) {
	https.get(this.url+'/latestblock?cors=true&format=json', function(res) {
		var raw = ''
		res.on('data', function (chunk) { raw += chunk })
  	res.on('end', function() { callback(JSON.parse(raw)['block_index']) })
	})
}

module.exports = Blockchain