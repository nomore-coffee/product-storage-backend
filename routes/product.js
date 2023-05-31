var express = require('express');
var router = express.Router();
const db = require("../model");
const Product = require('../model/product.model');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/getProduct",async (req,res)=>{
  const get_product = await db.product.find()
  res.send(get_product)
})
router.post('/saveProduct', async(req, res, next)=> {
  console.log(req.body)
  const save_product = new Product({
    productName:req.body.productName,
    pricePerQuantityGross:Number(req.body.pricePerQuantityGross),
    VAT:Number(req.body.VAT),
    pricePerQuantityNet:Number(req.body.pricePerQuantityNet),
    totalStocks:Number(req.body.totalStocks),
    image:req.body.image
  })
  try {
await save_product.save()
  res.send({statusCode:200 , message:"Producted Added"})
} catch (error) {
  res.send({statusCode:400 , message:"Duplicated Product"})
    
}
});
module.exports = router;
