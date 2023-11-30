const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.send("<h1>Thank you for your request</h1>");
});

app.listen(4000, () => {
  console.log("i am listening on port 4000!");
});
