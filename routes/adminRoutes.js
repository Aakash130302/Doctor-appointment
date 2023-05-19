const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");

const router = express.Router();

//GET method || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET method || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//POST Account status
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);
module.exports = router;
