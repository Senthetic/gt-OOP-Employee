const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//created employees array
const employees = [];
//function that handles the prompts
const initial = () => {
    inquirer.prompt([
        {
          type: "input",
          message: "What is manager's name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is manager's Id number?",
          name: "id",
        },
        {
          type: "input",
          message: "What is manager's email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is manager's office number?",
          name: "officeNumber",
        },
      ])
      .then((response) => {
        const newManager = new Manager(response.name,response.id,response.email,response.officeNumber);
        employees.push(newManager);
        moreEmployees()
    
      });

      const employeeQuestions = () => {
        inquirer.prompt({
        type: "list",
        message: "What type of employee would you like to use?",
        choices: ["Engineer", "Intern"],
        name: "role",
      })
      .then((answers) => {
        if(answers.role === "Engineer") {
        {
          inquirer.prompt([
              {
                type: "input",
                message: "What is engineer's name?",
                name: "name",
              },
              {
                type: "input",
                message: "What is engineer's id number?",
                name: "id",
              },
              {
                type: "input",
                message: "What is engineer's email?",
                name: "email",
              },
              {
                type: "input",
                message: "What is engineer's github username?",
                name: "github",
              },
            ])
            .then((response) => {
              const newEngineer = new Engineer(response.name,response.id,response.email,response.github);
              employees.push(newEngineer);
              moreEmployees();
            });
        }
      } else if(answers.role === "Intern"){
        {
            inquirer.prompt([
             {
                 type: "input",
                 message: "What is intern's name?",
                 name: "name",
             },
             {
                 type: "input",
                 message: "What is intern's Id number?",
                 name: "id",
             },
             {
                 type: "input",
                 message: "What is intern's email?",
                 name: "email",
             },
             {
                 type: "input",
                 message: "What is your intern's school?",
                 name: "school",
             }
            ]    
            ).then(response => {
                const newIntern = new Intern(response.name, response.id, response.email, response.school)
                employees.push(newIntern);
                moreEmployees();
            })
        }}
      });
    
    }
}


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
