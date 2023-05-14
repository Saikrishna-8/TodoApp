const TodoTaskService = require('../service/TodoTaskService')
const TodoCategoryService = require('../service/TodoCategoryService')


module.exports.home = async (req, res) => {
    // Gets categories of tasks from TodoCategory using service method
    const categories = await TodoCategoryService.getCats();
    //console.log('cats in controller ', categories);
    const todos = await TodoTaskService.getTodos();

    //console.log("Todos ", todos);
    return res.render('home', { title: 'ToDO List', cats: categories, todos: todos });
}

// to save data from from
module.exports.todo = async (req, res) => {
    //console.log('form data ', req.body);
    //return res.render('home',{});
    TodoTaskService.saveNewTask(req.body);
    return res.redirect('/');
}

// deleteTodos

module.exports.deleteTodos = async (req, res) => {
    console.log("to be delted ", req.body);

    TodoTaskService.deleteTodos(req.body.deleteTaskId);
    return res.redirect('/');
}

