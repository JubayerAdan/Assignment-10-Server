const express = require("express");
const app = express();
const port = 3000;
const chefs = require("./Data/Chefs.json");
const recipes = require("./Data/Recipe.json");
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Chef Is Running");
});

app.get("/chefs", (req, res) => {
  res.json(chefs);
});
app.get("/chefs/:id", (req, res) => {
  console.log(req.params.id);
  const separatedChef = chefs.find((chef) => chef.id == req.params.id);
  res.json(separatedChef);
});
app.get("/recipe", (req, res) => {
  res.json(recipes);
});
app.listen(port, () => {});
