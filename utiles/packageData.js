import { readFileSync } from "fs"

let path = import.meta.url.split("/")
path.pop()
path.pop()
path.push("package.json")
path.shift()
path.shift()
path.shift()
path = path.join("/")
const packageData = JSON.parse(readFileSync(path, "utf-8"))

export default packageData
