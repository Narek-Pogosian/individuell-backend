const Product = require("../models/productModel");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ id: product._id });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ msg: "Product deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
