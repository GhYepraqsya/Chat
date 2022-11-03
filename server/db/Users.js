const mongoose = require("mongoose");
const usersSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('users', usersSchema);