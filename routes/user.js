const express = require("express");
const router = express.Router();
const User = require("../models/User");

//GET ALL
router.get("/", async (req, res) => {
  const users = await User.find();
  try {
    return res.json(users);
  } catch (error) {
    return res.json({ message: "Users could not be retrieved" });
  }
});

// GET Single user
router.get("/user/:id", async (req, res) => {
  const singleUser = await User.findById(req.params.id);
  try {
    return res.json(singleUser);
  } catch (error) {
    return res.json({ message: "user could not be retrieved" });
  }
});

// POST single user
router.post("/user", async (req, res) => {
  console.log("Creating User");
  console.log(req.body.name);

  const newUser = await new User({
    name: req.body.name,
    lastName: req.body.lastName,
  }).save();

  try {
    return res.json(newUser);
  } catch (error) {
    return res.json(error);
  }
});

//Put (update) User
router.put("/user/:id", async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  try {
    return res.json(updateUser);
  } catch (error) {
    return res.json(error);
  }
});

//DELETE
router.delete('/user/:id', async (req, res) => {
 const deleteUser = await User.findByIdAndDelete(req.params.id)
 try {
  return res.json(deleteUser)
 } catch (error) {
  return res.json(error)
 }
})

module.exports = router;
