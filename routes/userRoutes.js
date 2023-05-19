const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middleware/authMiddleware");

//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//register || post
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//Apply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET All doctor
router.get("/getAllDoctor", authMiddleware, getAllDoctorController);

//Book appointment
router.post("/book-appointment", authMiddleware, bookAppointmentController);

//Booking availability
router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);

// Appointments list
router.get("/user-appointments", authMiddleware, userAppointmentsController)
module.exports = router;
