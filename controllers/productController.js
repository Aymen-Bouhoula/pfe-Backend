const express = require("express");
const Product = require("../models/productModel");
//validation
const validationProduct = require("../utils/validattion");
//
//affichage all product
async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("Sothing went wrong".red.bold, error);
  }
}

//affichage by ID
async function getProduct(req, res) {
  try {
    const product = await Product.findById(id);
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send(`product with ${id} not found `);
  }
}

//Creation

async function creationProduct(req, res) {
  try {
    const { error } = validationProduct(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const product = new Product(req.body);
    const result = await product.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send('Something went wrong');
  }
}

async function updateProduct(req, res) {}


//Delete product
async function deleteProduct(req, res) {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status(404).send('Product not found')
        }
        res.status(200).send('Product has been deleted with Successfuly')
    } catch (error) {
        res.status(400).send('Sothing went wrong on delete')
    }
}

module.exports = {
  getAllProducts,
  getProduct,
  creationProduct,
  updateProduct,
  deleteProduct,
};
