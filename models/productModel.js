const mongoose = require("mongoose");

const productShema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  imageURL: String,
  isAvailable: Boolean,
  quantityInStore: Number,
});

const Product = mongoose.model("Product", productShema);
module.exports = Product;


