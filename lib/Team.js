const inquirer = require("inquirer");
const Manager = require("./Manager");

function Team() {
  this.manager = [];
}

Team.prototype.initializeBuild = function () {
  inquirer
    .prompt({
      type: "text",
      name: "nameManager",
      message: "What is the team manager's name?",
    })
    // destructure name from the prompt object
    .then(({ nameManager }) => {
      this.manager = new Manager(nameManager);

      console.log(this.manager);
    });
};

module.exports = Team;
