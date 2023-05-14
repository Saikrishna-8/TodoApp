const mongoose = require('mongoose');
const { expect } = require('chai');
const sinon = require('sinon');

// Import the Mongoose model to be tested
const Todo = require('../models/TodoCategory');

describe('Todo model', () => {
    before(async () => {
        await mongoose.connect('mongodb://localhost/TodoListApp', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    it('should save a new todo', async () => {

        // to save one document in a collection 

        // const todo = new Todo({
        //     name:'Home'
        // });
        // const savedTodo = await todo.save();
        // expect(savedTodo.name).to.equal('Home');

        // To save Multiple documents in a collection

        todocats = [{
            name: 'Home'
        }, {
            name: 'Personal'
        }, {
            name: 'Work'
        }, {
            name: 'Shopping'
        }, {
            name: 'Other'
        }];

        // Todo.insertMany(todocats, (err, cats) => {
        //     if (err) {
        //         console.err(err);
        //     } else {
        //         console.log('Saved Todo Categories', cats);
        //     }
        // });

        const dbCats = await Todo.insertMany(todocats);

        expect(dbCats).to.be.an('array');
        expect(dbCats).to.have.lengthOf(4);
        expect(dbCats[0]).to.have.property('_id');
        expect(dbCats[0].name).to.equal('Home');

    });

    after(async () => {
        await mongoose.connection.close();
    });

});
