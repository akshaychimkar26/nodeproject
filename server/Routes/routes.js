const route = require("express").Router();
const {
  Data,
  Register,
  Login,
  bollywood,
  hollywood,
  auth,
  isLoggedIn,
  logOut,
} = require("../controllers/APi");

route.use("/data", Data);

route.use("/bollywood", auth, bollywood);
//route("/fitness", fitness);
//route.use("/hollywood", hollywood);
//route("/technology", technology);
//route("/gaming", gaming);

route.post("/register", Register);

route.post("/login", Login);

route.get("/checkloggedin", isLoggedIn);


route.post("/logout", logOut);

module.exports = { route };