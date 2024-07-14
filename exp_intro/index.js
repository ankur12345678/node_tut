const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("abra ca dabra" + req.query.name);
});

app.get("/:extra", (req, res) => {
  const extra = req.params.extra;
  console.log(extra);
});

app.listen(8000, () => {
  console.log("server started");
});
