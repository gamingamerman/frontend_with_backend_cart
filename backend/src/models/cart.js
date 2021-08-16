const { Schema, model } = require("mongoose")

const cartSchema = new Schema({
	name: String,
	qty: Number,
	price: Number
}, {
	collection: "shoppingCart"
})

module.exports = model("Cart", cartSchema)