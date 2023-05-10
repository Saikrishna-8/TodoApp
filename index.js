const express =require('express');
const app=express();

const port=8001;

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in starting the server at port: ${port} `+err);
    }
    console.log(`Server is runnig at port: ${port}`);
});