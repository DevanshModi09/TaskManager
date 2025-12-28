const express = require('express');
const router = express.Router();
const tasksControllers = require('../controllers/tasks.js');
//Setting up the routes

router
  .route('/')
  .get(tasksControllers.getAllTasks)
  .post(tasksControllers.createTask);

router
  .route('/:id')
  .patch(tasksControllers.updateTask)
  .delete(tasksControllers.deleteTask)
  .get(tasksControllers.getSingleTask);
module.exports = router;
