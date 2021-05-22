const express = require("express");

const router = express.Router();

const { viewFeedback, createFeedback, getFeedbackById } = require("../controllers/formControllers.js");

router.get("/", viewFeedback);
router.get("/:id", getFeedbackById);
router.post("/", createFeedback);


module.exports = router;