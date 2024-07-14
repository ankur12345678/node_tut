const mongoose = require("mongoose");

//all ops are async so use async await
//connect

mongoose
  .connect(
    "mongodb+srv://admin:Ankur%40mongodb1@cluster0.zvmkm3m.mongodb.net/my-table-name"
  )
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log(err);
  });

//create schema

const mySchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

//create model on basis of schema
const User = mongoose.model("user-collection", mySchema);

//its async
User.create({
  firstname: "Ankur",
  email: "ankur@gmail.com",
});

// check read update delete functions on google but remember to use async await as it is a async call
