const cartCtrl = {}
const Cart = require("../models/cart")

cartCtrl.getItems = async (req,res) => {
	const Items = await Cart.find() 
	res.send(Items)
}
cartCtrl.createItem = async ( req,res) => {
	const { name, qty, price} = req.body;
	const newItem = new Cart({
		name : name,
		qty : qty,
		price : price
	})
	await newItem.save()
	res.json({message:"Item Saved"})
}

module.exports = cartCtrl