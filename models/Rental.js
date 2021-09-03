const {Schema, model} = require('mongoose');

const RentalSchema = Schema(
 {
  user: {type: Schema.Types.ObjectId, ref: "User" },
  book:{type: Schema.Types.ObjectId, ref: "Book"}
 }
);

module.exports = model("Rental", RentalSchema);