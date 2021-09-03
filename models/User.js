const {Schema, model} = require('mongoose');
// const book = require('./books')

const UserSchema = Schema(
 {
  name: {type: String, required: [true, "First Name is required."]},
  lastName: {type: String, required: [true, "Last Name is required."]},
 }
)

module.exports = model('User', UserSchema)