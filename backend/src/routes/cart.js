const { Router } = require("express")
const router = Router()

const { getItems, createItem } = require("../controllers/cart_controller.js")

router.route("/")
	.get(getItems)
	.post(createItem)

module.exports = router