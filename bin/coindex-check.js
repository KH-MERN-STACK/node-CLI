import { program } from "commander"
import { check } from "../commands/check.js"

program
	.command("price")
	.description("Check price of coins")
	.option("--coin <type>", "Add specific coin types in csv format", "BTC,ETH,XRP")
	.option("--cur <currency>", "Change the currency", "USD")
	.action((cmd) => check.price(cmd))

program.parse(process.argv)
