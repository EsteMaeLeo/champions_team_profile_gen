const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const generatePage = require("./../src/page-template");
const fs = require("fs");

//create array of the objects
function Team() {
  this.manager = [];
  this.engineer = [];
  this.intern = [];
}

//main question for the manager information
Team.prototype.questions = function () {
  return inquirer.prompt([
    {
      type: "text",
      name: "nameManager",
      message: "What is the team manager's name?",
      validate: nameManager => {
        if (nameManager) {
          return true;
        } else {
          console.log("Please enter your team manager's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "idManager",
      message: "What is the team manager's id?",
      validate: idManager => {
        if (idManager) {
          return true;
        } else {
          console.log("Please enter your team manager's id!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "emailManager",
      message: "What is the team manager's email address?",
      validate: emailManager => {
        if (emailManager) {
          return true;
        } else {
          console.log("Please enter your team manager's email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeManager",
      message: "What is the team manager's office numner?",
      validate: officeManager => {
        if (officeManager) {
          return true;
        } else {
          console.log("Please enter your team manager's office numner!");
          return false;
        }
      },
    },
  ]);
};

//menu question for adding the rest members
Team.prototype.addingTeamMembers = function () {
  return inquirer
    .prompt({
      type: "list",
      message: "Which type of team member would you like to add?",
      name: "action",
      choices: [
        "Engineer",
        "Intern",
        "I dont want to add any more team members",
      ],
    })
    .then(({ action }) => {
      if (action === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your engineer's name?",
              name: "nameEngineer",
            },
            {
              type: "input",
              message: "What is your engineer's id?",
              name: "IdEngineer",
            },
            {
              type: "input",
              message: "What is your engineer's email?",
              name: "emailEngineer",
            },
            {
              type: "input",
              message: "What is your engineer's Github username?",
              name: "githubEngineer",
            },
          ])
          .then(qEngineer => {
            this.engineer;
            engineer = new Engineer(
              qEngineer.nameEngineer,
              qEngineer.IdEngineer,
              qEngineer.emailEngineer,
              qEngineer.githubEngineer
            );
            this.engineer.push(engineer);
            return this.addingTeamMembers();
          });
      }
      if (action === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your intern's name?",
              name: "nameIntern",
            },
            {
              type: "input",
              message: "What is your intern's id?",
              name: "IdIntern",
            },
            {
              type: "input",
              message: "What is your intern's email?",
              name: "emailIntern",
            },
            {
              type: "input",
              message: "What is your intern's school?",
              name: "schoolIntern",
            },
          ])
          .then(qIntern => {
            intern = new Intern(
              qIntern.nameIntern,
              qIntern.IdIntern,
              qIntern.emailIntern,
              qIntern.schoolIntern
            );
            this.intern.push(intern);

            return this.addingTeamMembers();
          });
      }
      if (action === "I dont want to add any more team members") {
        //call generate html
        this.generateHtml();
      }
    });
};

Team.prototype.initializeBuild = function () {
  this.questions()
    .then(answers => {
      this.manager = new Manager(
        answers.nameManager,
        answers.idManager,
        answers.emailManager,
        answers.officeManager
      );

      this.addingTeamMembers();
    })
    .catch(err => {
      console.log(err);
    });
};

//call function to generate html and write the file
Team.prototype.generateHtml = function () {
  const fileHtml = generatePage(this.manager, this.engineer, this.intern);
  const fileName = "./dist/index.html";

  fs.writeFile(fileName, fileHtml, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("File written successfully\n");
    }
  });
};
module.exports = Team;
