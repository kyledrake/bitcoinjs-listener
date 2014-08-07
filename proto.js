var Listener = require('bitcoinjs-listener')
var listener = new Listener({
	adapter: [
		Listener.adapter.blockchain(),
		Listener.adapter.chain({key: 'abcd'})
	]
})

listener.listen(['addr'])

listener.on('tx', function(tx) {
	// listener.getUnspent for update
})

listener.getUnspent(function(error, unspents, amount, latestBlockIndex) {
	amount.fiat('usd')
	amount.satoshi
	/* 
		unspents: [
			address: '1FzzMfNt46cBeS41r6WHDH1iqxSyzmxChw',
			hash: 'f6c51463ea867ce58588fec2a77e9056046657b984fd28b1482912cdadd16374',
			vout: 2,
			block: 3187820,
			amount: amount,
			confirmations: 1000
		]
	*/
})

