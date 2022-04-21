const inquirer = require("inquirer");
const Manager = require("./Manager");

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

  this.questions().then(answers => {
    this.manager = new Manager(
      answers.nameManager,
      answers.idManager,
      answers.emailManager,
      answers.officeManager
    );

    console.log(this.manager);
  });
};

module.exports = Team;
