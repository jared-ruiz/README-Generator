// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
       type: `input`,
       name: `title`,
       message: `What is the title of your project?` 
    },
    {
        type:'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
        type: `input`,
        name: `description`,
        message: `Please provide a description for your project.`
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide your installation instructions for your program.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide an explaination of how to use your program.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['MIT', 'IBM', 'GNU', 'None']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please detail any instructions on contributions to this program that you would like the public to know.'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide testing examples if you have them (if adding later, leave blank and continue).'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email for a means of contact regarding this project.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            else {
                resolve({
                    ok: true,
                    message: 'File created!'
                });
                console.log('README file created successfully!');
            }
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        //assign product of generateMarkdown to a variable
        const template = generateMarkdown(answers);
       
        //pass filename and template
        writeToFile('./README.md', template);
    })
}

// Function call to initialize app
init();
