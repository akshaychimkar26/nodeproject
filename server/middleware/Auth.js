const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const secretkey = process.env.secretkey;

const Auth = async (req, res, next) => {
  const token = req.headers;
  console.log(token, "in token");

  if (token) {
    jwt.verify(token, secretkey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    // Token is missing
    return res.status(401).json({ error: "Token missing" });
  }
};

module.exports = Auth;