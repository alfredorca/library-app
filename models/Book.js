const {Schema, model} = require('mongoose');

const BookSchema = Schema({
  title: { type: String, required: [true, "Title is required."] },
  author: String,
  numberOfPages: Number,
  genre: []
});

module.exports = model('Book', BookSchema)