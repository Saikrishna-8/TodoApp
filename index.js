const express = require('express');
const app = express();
const port = 8001;

// set view engine and views folder
app.set("view engine", "ejs");
app.set("views", "./views");



app.get('/', (req, res) => {
    return res.render('home');
});


app.listen(port, (err) => {
    if (err) {
        console.log(`Error in starting the server at port: ${port} ` + err);
    }
    console.log(`Server is runnig at port: ${port}`);
});