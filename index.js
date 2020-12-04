const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// const { error } = require("console");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'enter project title',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'enter table of contents',
        name: 'TableOfContents',
    },
    {
        type: 'input',
        message: 'Installation instructions',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Usage instructions',
        name: 'Usage',
    },
    {
        type: 'list',
        name: 'Liscenses',
        message: 'liscense',
        choices: [
            'mit',
            'ms-pl',
            'zlib',
        ]
    },
    {
        type: 'input',
        message: 'Please enter your Git-Hub profile link',
        name: 'Questions',
    },
];

// function to write README file
function writeToFile(fileName, answers) {
const genRead = generateMarkdown(answers)
    fs.writeFile(fileName, genRead, (err) =>
    err ? console.error(err) : console.log("file written"));
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const fileName = "README.md";
        writeToFile(fileName, answers)
    })

}

// function call to initialize program
init();
