const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let ListAllTask = ["Creat a function", "Find the algorithm"]

let a = "Welcome to your task manager, Press:";
let b = "1. to see all your tasks";
let c = "2. to add a task";
let d = "3. to delete a task";
let e = "4. to mark a task as done";
let f = "5. to Exit the task manager";

const menu = () => {

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)

    rl.question("Enter your number of choice ", nbr => {
        if(nbr === "1") {
            console.log(ListAllTask)
            rl.close()
        }else if (nbr === "2"){
            rl.question("Which task do you want do add?", answer => {
                ListAllTask.push(answer)
                console.log("Your task has been added on the list")
                rl.close()
                
            })
        }
    
    
    
})
menu(); 

