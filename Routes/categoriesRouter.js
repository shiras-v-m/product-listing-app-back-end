const express=require('express')

const router=new express.Router()

const categoriesController=require('../Controllers/categoryController_copy')

router.post('/createCategories',categoriesController.createCategories)
router.post('/createProduct',categoriesController.createProduct)
router.get('/getAllCategories',categoriesController.getAllCategories)


module.exports=router