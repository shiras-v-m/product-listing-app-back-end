const express=require('express')

const router=new express.Router()

const productController=require('../Controllers/productController')

router.post('/createProduct',productController.createProduct)


module.exports=router