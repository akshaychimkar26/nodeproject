const express = require("express");
const { route } = require("./Routes/routes");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
port = process.env.Port;
const auth = require("./middleware/Auth");
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(route);

app.listen(port, () => {
  console.log(`server running on ${port} `);
});