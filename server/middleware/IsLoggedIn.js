const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const SECRET_KEY = process.env.SecretKey;

// const UserModel = require("../model/Users");

const isLoggedIn = async (req, res) => {
  const currentTime = Math.floor(Date.now() / 1000);

  const { authorization } = req.headers;

  const token = authorization.split(" ")[1];

  if (!token) {
    req.isLoggedIn = false;
    req.user = null;
    // console.log("In null tokenn ----------------------");
    return res.send({ isLoggedIn: false });
  }

  try {
    const { exp, email } = jwt.verify(token, SECRET_KEY);

    if (exp > currentTime) {
      // const User = await UserModel.findOne({ email: email });
      // console.log(User.name);
      req.isLoggedIn = true;
      req.user = User.name;

      // console.log("in 'If token in present'");
      return res.send({ isLoggedIn: true });
    } else {
      req.isLoggedIn = false;
      req.user = null;

      return res.send({ isLoggedIn: false });
    }
  } catch (err) {
    console.log(err);
    req.isLoggedIn = false;
    req.user = null;
    return res.send({ isLoggedIn: false, msg: "something went wrong" });
  }
};
module.exports = { isLoggedIn };