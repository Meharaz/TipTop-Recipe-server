const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const details = require("./data/details.json");


app.use(cors());
app.get("/", (req, res) => {
  res.send("Working");
});

app.get("/all", (req, res) => {
  res.send(details);
});

app.get("/chef_Details/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = details.find((n) => n.id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`running in port : ${port}`);
});
