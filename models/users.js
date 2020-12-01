const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(
  {
    Username: { type: String, unique : true },
    Password: { type: String },
  },
  { collection: "Mst_User" }
);


const Mst_User = mongoose.model("Mst_User", UserSchema);
module.exports = Mst_User;
