const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
  title: { type: String, required: [true, "Title is required."] },
  author: String,
  numberOfPages: Number,
  genre: []
});

module.exports = mongoose.model('Book', BookSchema)