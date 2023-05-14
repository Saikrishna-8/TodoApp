const db = require('../config/mongooseDbCon');

// import the TodoCategory mongoose model
const TodoCategory = require('../models/TodoCategory');

// get cats from DB (TodoCategory)

module.exports.getCats = async () => {

    if (db.readyState === 1) {
        console.log('db imported ...');
        try {
            const categories = await TodoCategory.find({});
            //console.log("categories ..> ", categories);
            return categories;
        } catch (error) {
            console.error('Failed to retrieve categories', error);
            return [];
        }
    } else {
        console.log('Not Imported Well');
        return [];
    }
}
// this piece code is not used in our project
module.exports.getCategoryNameById = async (id) => {
    try {
        const category = await TodoCategory.findById(id);
        return category.name;
    } catch (err) {
        console.error(err);
        return "Unknown";
    }
}
