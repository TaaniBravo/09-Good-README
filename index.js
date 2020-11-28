const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please provide your GitHub account username.',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please provide an email.',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a detailed description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List your collaborators, APIs used, and any tutorials followed.',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'Please choose your preferred license.',
        name: 'license',
        choices: ['GNU GPLv3', 'MIT', 'Unlicense']
    },
    {
        type: 'input',
        message: 'If you want contribution please detail how people can.',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Write out tests for your application. Then provide examples on how to run them faster.',
        name: 'tests'
    },
];

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            // WARNING this will overwrite and previously made README.md in the generated-README folder.
            fs.writeFile('./generated-README/README.md', generateMarkdown(data),
                err => err ? console.error(err) : console.log('Generating your README!'))
        })
}

// function call to initialize program
init();

