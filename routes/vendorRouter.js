const express = require('express')
const _ = express.Router()
const {createCategory,getAllCategory,createSubCategory,getAllSubCategory,getAllCategoryWiseSubCategory,getAllOwnerWiseCategory} = require('../controllers/vendorController')

_.post('/create/category',createCategory)
_.get('/all/category',getAllCategory)
_.post('/create/subcategory',createSubCategory)
_.get('/all/subcategory',getAllSubCategory)
_.get('/all/category/:id/subcategory',getAllCategoryWiseSubCategory)
_.get('/all/user/:id/category',getAllOwnerWiseCategory)





module.exports = _