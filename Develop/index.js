// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
       type: `input`,
       name: `title`,
       message: `What is the title of your project?` 
    },
    {
        type: `input`,
        name: `description`,
        message: `Please provide a description for your project.`
    },
    {
        type: `list`,
        name: `license`,
        message: `Please select a license.`,
        choices: [`MIT`, `IBM`, `GNU`, `None`]
    }



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const template = generateMarkdown(answers);
        console.log(template);
    })
}

// Function call to initialize app
init();
