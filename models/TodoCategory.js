const mongoose = require('mongoose');

const todoCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    }
});

const TodoCategory = mongoose.model('TodoCategory', todoCategorySchema);
module.exports = TodoCategory;
