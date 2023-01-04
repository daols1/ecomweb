const express = require('express')
const {getCategories, createCategory, deleteCategory, updateCategory} = require('./../controller/categoryController')
const{ protect, role } = require('./../controller/authController')
const router = express.Router()

router.route('/category').get(getCategories).post(protect, role('admin'), createCategory).put(updateCategory).delete(deleteCategory)

module.exports = router