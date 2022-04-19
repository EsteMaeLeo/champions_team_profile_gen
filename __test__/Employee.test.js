const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee.js");

test("creates an Employee object", () => {
  const employee = new Employee("John Smith", "1", "johnsmith@gmail.com");

  expect(employee.name).toBe("John Smith");
  expect(employee.id).toBe("1");
  expect(employee.email).toBe("johnsmith@gmail.com");
});
