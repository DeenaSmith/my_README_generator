
// TODO: Include packages needed for this application
const fs = require("fs");
const fileUtils = require('./utils/generate.Markdown')
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt(
  [
    {
      type: 'input',
      message: "What is the title of your project?",
      name: 'title',
      validate: (value) => { if (value){return true} else {return 'You must enter a value to proceed.'}},
    },
    {
      type: 'input',
      message: "Please describe your project.",
      name: 'description',
      validate: (value) => { if (value){return true} else {return 'You must enter a value to proceed.'}},
    },
    {
      type: 'input',
      message: "Are there any installation instructions for your project?",
      name: 'installation',
      validate: (value) => { if (value){return true} else {return 'You must enter a value to proceed.'}},
    },
    {
      type: 'input',
      message: "Is there any spectific usage information?",
      name: 'usage',
      validate: (value) => { if (value){return true} else {return 'You must enter a value to proceed.'}},
    },
    {
      type: 'input',
      message: "What are the contribution guidelines for your project?",
      name: 'contribution',
      validate: (value) => { if (value){return true} else {return 'You must enter a value to proceed.'}},
    },
    {
      type: 'input',
      message: "Are there any testing instructions?",
      name: 'testing',
      validate: (value) => { if (value){return true} else {return 'You must enter a value to proceed.'}},
    },
    {
      type: 'list',
      message: "What license is your project under?",
      name: 'license',
      choices: ['Apache', 'MIT', 'GPL', 'ISC', 'NA'],
      validate: (value) => { if (value){return true} else {return 'You must enter a value to proceed.'}},
    },
    {
      type: 'input',
      message: "What is your GitHub username?",
      name: 'username',
      validate: (value) => { if (value){return true} else {return 'You must enter a value to proceed.'}},
    },
    {
      type: 'input',
      message: "What is your email address?",
      name: 'email',
      validate: (value) => { if (value){return true} else {return 'You must enter a value to proceed.'}},
    }
  ]
)



// TODO: Create a function to write README file
const readmeDataArgs = process.argv.slice(2, process.argv.length);
const [name, project] = readmeDataArgs;

fileUtils.generateMarkdown( {
    name, project
})
       //HTML template for output
       const writeToFile = (userName, projectTitle) => {
        return `
        
        `;
    };


        //Generates new HTML file after input is complete
fs.writeFile('README.md', writeToFile(name, project), err => {
    if (err) throw err;

   // console.log('README generated! Check out README.md to see the output!');
});




// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();








