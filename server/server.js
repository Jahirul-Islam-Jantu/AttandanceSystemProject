const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.send("<h1>Thank you for your request in this server</h1> <p>this is a sever paragraph</p>");
});

app.listen(3000, () => {
  console.log("i am listening on port 3000!");
});
