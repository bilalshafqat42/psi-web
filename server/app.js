const express = require("express");

const app = express();

app.use(express.json());

app.listen(4000, (req, res) => {
  console.log(`app is running!`);
});
