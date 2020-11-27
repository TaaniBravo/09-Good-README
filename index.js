// array of questions for user
const questions = [
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
        type: 'confirm',
        message: 'Do you want your license to be restrictive?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please provide a name to apply to the License.',
        name: 'name'
    },
    {
        type: 'confirm',
        message: 'Do you want badges in your README?',
        name: 'badges'
    },
    {
        type: 'input',
        message: 'Please provide a GitHub account to reach for questions section.',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please provide an email to reach for questions section.',
        name: 'email'
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
