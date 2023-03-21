const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt(
    [
        {
            type: 'input',
            message:"What's the project title?",
            name: 'title',
            validate: (value)=>{if(value){return true}else{ return 'Need an input'}},
        },
        {
            type: 'input',
            message:"Enter a short description?",
            name: 'description',
            validate: (value)=>{if(value){return true}else{ return 'Need an input'}},
        },
        {
            type: 'input',
            message:"How do you install?",
            name: 'installation',
            validate: (value)=>{if(value){return true}else{ return 'Need an input'}},
        },
        {
            type: 'input',
            message:"How is to be used?",
            name: 'usage',
            validate: (value)=>{if(value){return true}else{ return 'Need an input'}},
        },
        {
            type: 'input',
            message:"Credits?",
            name: 'credits',
            validate: (value)=>{if(value){return true}else{ return 'Need an input'}},
        },
        {
            type: 'list',
            message:"What is the license?",
            name: 'license',
            choices:['MIT', "GPL", 'Apache', 'GNU','None'],
            validate: (value)=>{if(value){return true}else{ return 'Need an input'}},
        }
    ]
).then(({
    title,
    description,
    installation,
    usage,
    credits,
    license
})=>{
    const template = `
# ${title}

### Table of Contents
* [Description](#description)
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

    createFile(title,template);
});

function createFile(title,template){
    fs.writeFile(`./README.md`,template,(err)=>{
        if(err){
            console.log(err);
        }
        console.log('Success!');
    })
}