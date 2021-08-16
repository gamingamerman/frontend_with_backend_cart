const mongoose = require("mongoose")

const URI = "mongodb+srv://dbUser1:Mq8BTFPz7QpTRW2T@movies.uxfxv.mongodb.net/cart?retryWrites=true&w=majority"

mongoose.connect(URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useCreateIndex: true,
    useFindAndModify: false
})

const connection = mongoose.connection;

connection.once("open", () => {
	console.log("DB is connected")

})