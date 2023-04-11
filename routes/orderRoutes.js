const express = require("express");
const {
  createOrder,
  getAllOrdersForUser,
} = require("../controllers/orderControllers");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.post("/", verifyToken, createOrder);
router.get("/", verifyToken, getAllOrdersForUser);

module.exports = router;
