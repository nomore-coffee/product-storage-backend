const mongoose = require("mongoose");

const Product = mongoose.model(
  "product",
  new mongoose.Schema({
    productName:{type:String , required:true , unique:true},
    pricePerQuantityGross:{type:Number , required:true },
    VAT:{type:Number , required:true },
    pricePerQuantityNet:{type:Number , required:true },
    totalStocks:{type:Number , required:true },
    image:{type:String }
  }),
  "product"
);

module.exports = Product;