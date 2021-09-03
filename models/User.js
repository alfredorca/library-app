const mongoose = require('mongoose');
// const book = require('./books')

const UserSchema = mongoose.Schema(
 {
  name: {type: String, required: [true, "First Name is required."]},
  lastName: {type: String, required: [true, "Last Name is required."]},
 }
)

module.exports = mongoose.model('User', UserSchema)