// File: backend/src/routes/userRoutes.js

const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// GET all users
router.get("/users", userController.getUsers);

// GET user by ID
router.get("/users/:id", userController.getUserById);

module.exports = router;
