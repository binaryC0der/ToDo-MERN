const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add your name."],
    },
    email: {
      type: String,
      required: [true, "Please add your email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "PLease add a password."],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User",userSchema);
module.exports = User;