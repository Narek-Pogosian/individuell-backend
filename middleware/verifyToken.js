const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET);

    const { id } = jwt.decode(token, process.env.JWT_SECRET);
    // Hämtar user id från token
    // Lägger in i req.body för att sedan använda
    req.body.user = id;

    next();
  } catch {
    return res.status(401).json({ msg: "Access restricted, please login" });
  }
};

module.exports = verifyToken;
