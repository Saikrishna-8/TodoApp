const mongoose = require('mongoose');

// Import the Mongoose model to be saved
const Todotask = require('../models/TodoTask');
const TodoTask = require('../models/TodoTask');

const TodoCategoryService = require('../service/TodoCategoryService')


// to save new todo
module.exports.saveNewTask = (todo) => {

    //Todotask.insertOne();
    const myData = new Todotask(todo);

    myData.save()
        .then(data => {
            console.log('Data saved successfully:', data);
            //db.close();
        })
        .catch(err => {
            console.error('Error saving data:', err);
            //db.close();
        });
}

// to retrieve all the tasks from mongodb
module.exports.getTodos = async () => {
    try {
        const todoTasks = await TodoTask.find({}).populate('category');
        //console.log("Todos ..> ", Todos);
        return todoTasks;
    } catch (error) {
        console.error('Failed to retrieve todos', error);
        return [];
    }
}

module.exports.deleteTodos = async (deleteTaskIds) => {

    const objectIds = deleteTaskIds.split(',').map(id => new mongoose.Types.ObjectId(id));

    try {
        const result = await TodoTask.deleteMany({ _id: { $in: objectIds } })
        console.log(`${result.deletedCount} documents deleted`);
    } catch (err) {
        console.log('Failed to delete Todo');
    }

}

