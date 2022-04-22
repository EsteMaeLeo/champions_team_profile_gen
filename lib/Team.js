const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const generatePage = require("./../src/page-template");
const fs = require("fs");

function Team() {
  this.manager = [];
  this.engineer = [];
  this.intern = [];
}

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
            console.log(qEngineer);
            this.engineer;
            engineer = new Engineer(
              qEngineer.nameEngineer,
              qEngineer.IdEngineer,
              qEngineer.emailEngineer,
              qEngineer.githubEngineer
            );
            this.engineer.push(engineer);
            //console.log(this.engineer);
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
            console.log(qIntern);
            intern = new Intern(
              qIntern.nameIntern,
              qIntern.IdIntern,
              qIntern.emailIntern,
              qIntern.schoolIntern
            );
            this.intern.push(intern);
            //console.log(this.intern);
            return this.addingTeamMembers();
          });
      }
      if (action === "I dont want to add any more team members") {
        console.log(action);
        //at end option generate
        this.generateHtml();
        // console.log(this.manager);
        // console.log(this.intern);
        // console.log(this.engineer);
      }
    });
};

Team.prototype.initializeBuild = function () {
  //   inquirer
  //     .prompt(
  //       {
  //         type: "text",
  //         name: "nameManager",
  //         message: "What is the team manager's name?",
  //         validate: nameManager => {
  //           if (nameManager) {
  //             return true;
  //           } else {
  //             console.log("Please enter your team manager's name!");
  //             return false;
  //           }
  //         },
  //       },
  //       {
  //         type: "input",
  //         name: "idManager",
  //         message: "What is the team manager's id?",
  //         validate: idManager => {
  //           if (managerId) {
  //             return true;
  //           } else {
  //             console.log("Please enter your team manager's id!");
  //             return false;
  //           }
  //         },
  //       },
  //       {
  //         type: "input",
  //         name: "emailManager",
  //         message: "What is the team manager's email address?",
  //         validate: emailManager => {
  //           if (emailManager) {
  //             return true;
  //           } else {
  //             console.log("Please enter your team manager's email addressl!");
  //             return false;
  //           }
  //         },
  //       }
  //     )
  // destructure name from the prompt object
  //   this.initializeBuild().then(({ nameManager }) => {
  //     this.manager = new Manager(nameManager);

  //     console.log(this.manager);
  //   });

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
    .then(pageHTML => {})
    .catch(err => {
      console.log(err);
    });
};

Team.prototype.generateHtml = function () {
  console.log(this.manager);
  console.log(this.engineer);
  console.log(this.intern);

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
