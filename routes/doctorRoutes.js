const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentController,
  updateStatusController,
} = require("../controllers/doctorctrl");
const router = express.Router();

//POST single doc info
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST update profile
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST GET Single DOC INFO
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//GET appointments
router.get("/doctor-appointments", authMiddleware, doctorAppointmentController);

//POST update status
router.post("/update-status", authMiddleware, updateStatusController);
module.exports = router;
