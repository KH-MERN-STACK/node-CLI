#!/usr/bin/env node

import { program } from "commander"
import packageData from "../utiles/packageData.js"

program
	.version(packageData.version)
	.command("key", "Manage API Key -- https://nomics.com")
	.command("check","Check Coin Price Info")
	.parse(process.argv)
	