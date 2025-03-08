const express = require("express");
const teacherController = require("../controllers/teacherController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", teacherController.registerTeacher);
router.post("/login", teacherController.loginTeacher);
router.get("/students", authenticate, teacherController.getAllStudents);

module.exports = router;