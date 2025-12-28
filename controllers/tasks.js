const TaskModel = require('../models/tasks.js');
const asyncWrapper = require('../middlewares/asyncWrapper.js');
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await TaskModel.find({});
  res.status(200).json({ tasks: tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await TaskModel.create(req.body);
  res.status(200).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res) => {
  const { id: TaskId } = req.params;
  const task = await TaskModel.findOne({ _id: TaskId });
  if (!task) {
    return res
      .status(404)
      .json({ msg: 'No task found wtih task id :  ' + TaskId });
  }
  res.status(201).json({ task });
});
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: TaskId } = req.params;
  const task = await TaskModel.findOneAndDelete({ _id: TaskId });
  if (!task) {
    return res
      .status(404)
      .json({ msg: 'No task found wtih task id :  ' + TaskId });
  }
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: TaskId } = req.params;
  const task = await TaskModel.findOneAndUpdate({ _id: TaskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res
      .status(404)
      .json({ msg: 'No task found wtih task id :  ' + TaskId });
  }
  res.status(201).json({ task });
});
module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  deleteTask,
  updateTask,
};
