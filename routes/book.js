const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

//GET ALL
router.get("/", async (req, res) => {
 const books = await Book.find();
 try {
  return res.json(books)
 } catch (error) {
  return res.json(error)
 } 
})

//GET single book
router.get('/book/:id', async (req, res) => {
 const singleBook = await Book.findById(req.params.id);
 try {
  return res.json(singleBook)
 } catch (error) {
  return res.json(error)
 }
})

//POST single book
router.post('/book', async (req, res) => {
 const newBook = await Book.create({
  title: req.body.title,
  author: req.body.author,
  numberOfPages: req.body.numberOfPages,
  genre: req.body.genre
 })
 
 try {
  return res.json(newBook) 
 } catch (error) {
  return res.json(error)
 }
});

//PUT (update) book
router.put('/book/:id', async (req, res) => {
 const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true})
 try {
  return res.json(updateBook)
 } catch (error) {
  return res.json(error)
 }
})

//DELETE
router.delete('/book/:id', async (req, res) => {
 const deleteBook = await Book.findByIdAndDelete(req.params.id)
 try {
  return res.json(deleteBook)
 } catch (error) {
  return res.json(error)
 }
})

module.exports = router;