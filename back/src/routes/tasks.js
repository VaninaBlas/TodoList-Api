const express = require("express");

const router = express.Router();
const taskcontroller = require("../controllers/tasksController");

router.get("/", taskcontroller.getTasks);
router.get("/:id", taskcontroller.getTasksById);
router.post("/", taskcontroller.createTask);
router.put("/:id", taskcontroller.updateTask);
router.delete("/:id", taskcontroller.deleteTask);
module.exports = router;
