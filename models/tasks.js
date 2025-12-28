const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide the taskname'],
    trim: true,
    maxlength: [30, 'Name cannot be more than 30 characters'],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Tasks', TaskSchema);
