const express = require("express");
const studentController = require("../controllers/studentController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", studentController.registerStudent);
router.post("/login", studentController.loginStudent);
router.get("/profile", authenticate, studentController.getStudentProfile);
router.put("/profile", authenticate, studentController.updateStudentProfile);

module.exports = router;