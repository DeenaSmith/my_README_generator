
// TODO: Include packages needed for this application
const fs = require("fs");
//const writeToFile = require('./utils/generate.Markdown')


// TODO: Create an array of questions for user input
const questions = [];



// TODO: Create a function to write README file
const readmeDataArgs = process.argv.slice(2, process.argv.length);
const [name, project] = readmeDataArgs;

 
       //HTML template for output
       const writeToFile = (userName, projectTitle) => {
        return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>My README Generator</title>
        </head>
      
        <body>
          <h1>${name}</h1>
          <h2>${project}</h2>
        </body>
        </html>
        `;
    };


        //Generates new HTML file after input is complete
fs.writeFile('index.html', writeToFile(name, project), err => {
    if (err) throw err;

    console.log('README generated! Check out index.html to see the output!');
});




// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();








