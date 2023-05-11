const mongoose = require('mongoose');

const todoCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const TodoCategory = mongoose.model('TodoCategory', todoCategorySchema);
module.exports = TodoCategory;
