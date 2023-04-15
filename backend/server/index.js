const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.static("/public"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/dashboard", (req, res) => {
  res.send("EGG");
});

app.listen(3001, () => {
  console.log("listening on PORT 3001");
});
