const app = require("./app")
require("./database")

async  function main() {
	await app.listen(app.get("port"))
	console.log("Listening on port 4000")
}

main()