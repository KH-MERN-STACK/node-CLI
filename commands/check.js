import KeyManager from "../liberary/KeyManager.js"
import CryptoAPI from "../liberary/cryptoAPI.js"

export const check = {
	async price(cmd) {
		try {
			const keyManager = new KeyManager()
			const key = keyManager.getKey()
			const api = new CryptoAPI(key)
			const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur)
			console.log(priceOutputData)
		} catch (err) {
			console.log(err.message.red)
		}
	},
}
