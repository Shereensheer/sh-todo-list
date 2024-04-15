#! /usr/bin/env node

import inquirer from "inquirer";

let todos : string[] = [];
let condition = true;

while(condition){
let addtask = await inquirer.prompt(
    [
        {
            name : "todo",
            type : "input",
            message : "what do you want to add in your todo ?"
        },

       {
             name : "addMore",
             type : "confirm",
             message : "Do you want to add more todo ?",
             Default : "true"
       }
    
       
    ]
);
   todos.push(addtask.todo);
   condition = addtask.addMore
   console.log(todos);
}
