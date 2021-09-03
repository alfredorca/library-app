const express = require('express');
const Rental = require('../models/Rental');
const router = express.Router();

//GET ALL
router.get("/", async (req, res) => {
  const rentals = await Rental.find().populate("user").populate("book");
  try {
    return res.json(rentals);
  } catch (error) {
    return res.json({ message: "rentals could not be retrieved" });
  }
});

// GET Single Rental
router.get("/rental/:id", async (req, res) => {
  const singleRental = await Rental.findById(req.params.id);
  try {
    return res.json(singleRental);
  } catch (error) {
    return res.json({ message: "rental could not be retrieved" });
  }
});

// POST single Rental
router.post("/rental", async (req, res) => {
  console.log("Creating Rental");
  console.log(req.body.name);

  const newRental = await Rental.create({
    user: req.body.user,
    book: req.body.book,
  });

  try {
    return res.json(newRental);
  } catch (error) {
    return res.json(error);
  }
});

//Put (update) Rental
router.put("/rental/:id", async (req, res) => {
  const updateRental = await Rental.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  try {
    return res.json(updateRental);
  } catch (error) {
    return res.json(error);
  }
});

//DELETE
router.delete("/rental/:id", async (req, res) => {
  const deleteRental = await Rental.findByIdAndDelete(req.params.id);
  try {
    return res.json({ success: "Rental was deleted!" });
  } catch (error) {
    return res.json(error);
  }
});


module.exports = router;