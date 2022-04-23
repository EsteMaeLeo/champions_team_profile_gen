const Employee = require("../lib/Employee.js");
//calss engineer
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  //return the address github
  getGithub() {
    return "https://github.com/" + this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
