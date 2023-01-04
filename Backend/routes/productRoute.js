const router = require('express').Router()
const {getProducts, createProduct, updateProduct, deleteProduct} = require('./../controller/productController')

router.route('/products').get(getProducts).post(createProduct)

router.route('/products/:id').put(updateProduct).delete(deleteProduct)

module.exports = router;