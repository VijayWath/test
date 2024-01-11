import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = process.env.PORT||3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var options = {weekday :'long' , year : 'numeric' , month:'long' , day: 'numeric'};
var today = new Date();
var current_date = today.toLocaleDateString("en-US",options);

console.log(current_date);

let newTodoList = [];
app.get('/',(req,res)=>{
    res.render("list.ejs",{current_date : current_date,newTodo : newTodoList });
}); 

app.post("/submit",(req,res)=>{
    let newTodo = req.body.newTodo;
    newTodoList.push(newTodo);
    res.redirect('/');

})





app.listen(port,() => {
    console.log(`listening to ${port}`);
});
