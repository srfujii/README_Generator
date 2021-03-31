// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input...
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        message: `What is your project's name?`,
        name: 'projectname',
    },
    {
        type: 'input',
        message: `Please write a short description of your project:`,
        name: 'projectdesc',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'installcommand',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'use',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

inquirer
  .prompt(questions).then((data) => {
    console.log("We have data: " + data);
    console.log(JSON.stringify(data));

    const markdownContent = generateMarkdown(data);
    writeToFile('./README.md', markdownContent);

    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


//     console.log(JSON.stringify(answers, null, '  '));

function writeToFile(fileName, data) {

    console.log("Generating README file....." + data);

    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'));

}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
