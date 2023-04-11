const Order = require("../models/orderModel");

exports.createOrder = async (req, res) => {
  // req =  {user: id, items: [{product: id, quantity: number}]}
  try {
    await Order.create(req.body);
    res.status(201).json({ msg: "Order created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getAllOrdersForUser = async (req, res) => {
  const { user } = req.body;
  try {
    const orders = await Order.find({ user })
      .populate("items.product")
      .populate("user", ["name", "email"]);
    // Vill inte populera all information

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
