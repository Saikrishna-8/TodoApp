const mongoose = require('mongoose');

const todoTaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TodoCategory',
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
});

const TodoTask = mongoose.model('TodoTask', todoTaskSchema);

module.exports = TodoTask;
