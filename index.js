// Import the necessary packages
const inquirer = require('inquirer'); //Inquirer is used to prompt the user in the console log
const fs = require('fs'); //fs is used to generate the READ ME file

// Use inquirer to prompt the user for information about the project
inquirer.prompt([
  {
    type: 'input',
    message: "What's the project title?", //Project Title
    name: 'title',
    validate: value => value ? true : 'Need an input',
  },
  {
    type: 'input',
    message: 'Enter a short description:', //Description Section
    name: 'description',
    validate: value => value ? true : 'Need an input',
  },
  {
    type: 'input',
    message: 'How do you install?', //How to install app or packages
    name: 'installation',
    validate: value => value ? true : 'Need an input',
  },
  {
    type: 'input',
    message: 'How is it to be used?', //Recommended use of application
    name: 'usage',
    validate: value => value ? true : 'Need an input',
  },
  {
    type: 'input',
    message: 'Credits?', //Citations or who this belongs to
    name: 'credits',
    validate: value => value ? true : 'Need an input',
  },
  {
    type: 'list',
    message: 'What is the license?', //list for licenses
    name: 'license',
    choices: ['MIT', 'GPL', 'Apache', 'GNU', 'None'],
    validate: value => value ? true : 'Need an input',
  },
]).then(({ title, description, installation, usage, credits, license }) => {
  // Use the user's responses to generate a Markdown-formatted string
  const template = `
# ${title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}`;

  // Call the createFile function to write the Markdown template to a file
  createFile(title, template);
});

// Define the createFile function to write the Markdown template to a file
function createFile(title, template) {
  fs.writeFile('./README.md', template, err => {
    // If an error occurs, log it to the console
    if (err) {
      console.log(err);
    }
    // Otherwise, log a success message to the console
    console.log('Success!');
  });
}