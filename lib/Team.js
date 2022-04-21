const inquirer = require("inquirer");
const Engineer = require("./Engineer");
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

Team.prototype.addingPeople = function () {
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
            console.log(this.engineer);
            return this.addingPeople();
          });
      }
      if (action === "I dont want to add any more team members") {
        console.log(action);
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

  this.questions().then(answers => {
    this.manager = new Manager(
      answers.nameManager,
      answers.idManager,
      answers.emailManager,
      answers.officeManager
    );

    console.log(this.manager);
    this.addingPeople();
  });
};

module.exports = Team;
