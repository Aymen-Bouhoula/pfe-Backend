const express = require("express");
const {
  getAllProducts,
  getProduct,
  creationProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router()


router.get('/',getAllProducts)
router.get('/:id',getProduct)
router.post('/',creationProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports = router