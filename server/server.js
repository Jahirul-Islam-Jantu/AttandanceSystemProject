const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.send("<h2>Thank you for your request</h2>");
});

app.listen(3000, () => {
  console.log("i am listening on port 3000!");
})
