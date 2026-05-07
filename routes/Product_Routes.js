const express = require("express");

const router = express.Router();

const {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require("../Controller/Product_Controller");

// ADD PRODUCT
router.post("/add", addProduct);

// GET ALL PRODUCTS
router.get("/all", getAllProducts);

// GET SINGLE PRODUCT
router.get("/:id", getSingleProduct);

// UPDATE PRODUCT
router.put("/update/:id", updateProduct);

// DELETE PRODUCT
router.delete("/delete/:id", deleteProduct);

// GET PRODUCTS BY CATEGORY
router.get("/category/:category", getProductsByCategory);

module.exports = router;