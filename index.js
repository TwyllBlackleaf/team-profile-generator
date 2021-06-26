// Table of Contents
// S1. Dependencies
// S2. Global variables
// S3. Question arrays for inquirer functions
// S4. Functions

// S1. Dependencies
const inquirer = require("inquirer");

// S2. Global variables
var engineersArr = [];
var internsArr = [];

// S3. Question arrays for inquirer functions
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter the team manager's name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Team manager's name is required.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "idNumber",
        message: "Please enter the team manager's employee ID.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Team manager's ID is required.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the team manager's email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Team manager's email is required.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the office number of the team manager's office.",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Team manager's office number is required.")
                return false;
            }
        }
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter the engineer's name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Engineer's name is required.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "idNumber",
        message: "Please enter the engineer's employee ID.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Engineer's ID is required.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Engineer's email is required.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Please enter the engineer's GitHub username.",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Engineer's GitHub username is required.")
                return false;
            }
        }
    }
]

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter the intern's name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Intern's name is required.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "idNumber",
        message: "Please enter the intern's employee ID.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Intern's ID is required.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the intern's email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Intern's email is required.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "Please enter the name of the intern's school.",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Intern's school is required.")
                return false;
            }
        }
    }
]


// S4. Functions
function managerPrompt(questions) {
    inquirer.prompt(questions).then((answers) => {
        const manager = new Manager(answers.name, answers.idNumber, answers.email, answers.officeNumber);
        return manager;
    })
}

function nextEmployee() {
    inquirer.prompt({
        type: "confirm",
        name: "nextEmployee",
        message: "Do you want to add another employee?",
        default: true
    }).then(({ answer }) => {
        if (answer) {
            inquirer.prompt({
                type: "list",
                name: "employeeType",
                message: "Do you want to add an Engineer or an Intern?",
                choices: ["Engineer", "Intern"]
            }).then(({ answer }) => {
                if (answer === "Engineer") {
                    engineerPrompt(engineerQuestions);
                } else {
                    internPrompt(internQuestions);
                }
            })
        }
    })
}

function engineerPrompt(questions) {

}

function internPrompt(questions) {

}