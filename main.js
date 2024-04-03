const fs = require("fs");
const readline = require("readline");
const imported = require("./utils.js");


file = fs.readFileSync("./quotesFile.txt","UTF-8");

const quotes = file.split("\n");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function userInput(){
    
    rl.question("Please enter any key besides N to get a random quote ..." , (key) => {

        if (key !== "N" ){

            console.log(quotes[imported.randomNumberGenerator(quotes)]);
            userInput();

        }else{

            console.log("You have exited the program.");
            process.exit();
        }
        
    });
}

userInput();



