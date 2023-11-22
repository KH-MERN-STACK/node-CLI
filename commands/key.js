import KeyManager from "../liberary/KeyManager.js"
import inquirer from "inquirer"
import colors from "colors"
import { isRequired } from "../utiles/validation.js"

const key = {
	async set() {
		const keyManager = new KeyManager()
		const input = await inquirer.prompt({
			type: "input",
			name: "key",
			message: "Enter API key".green + " https://nomics.com",
			validate: isRequired,
		})
		const key = keyManager.setKey(input.key)

		if (key) {
			console.log("API Key Set".blue)
		}
	},
	show() {
		try {
			const keyManager = new KeyManager()
			const key = keyManager.getKey()
			console.log("Currrent API Key: ", key.yellow)
			return key
		} catch (err) {
			console.log(err.message)
		}
	},
	remove() {
		try {
			const keyManager = new KeyManager()
			keyManager.deleteKey()
			console.log("Key is removed".blue)
			return
		} catch (err) {
			console.log(err.message)
		}
	},
}

export default key
