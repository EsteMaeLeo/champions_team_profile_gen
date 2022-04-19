const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee.js");

test("creates an Employee object", () => {
  const employee = new Employee("John Smith", "1", "johnsmith@gmail.com");

  expect(employee.name).toBe("John Smith");
  expect(employee.id).toBe("1");
  expect(employee.email).toBe("johnsmith@gmail.com");
});

test("get employee's name value", () => {
  const employee = new Employee("John Smith", "1", "johnsmith@gmail.com");

  expect(employee.getName()).toEqual(
    expect.stringContaining(employee.name.toString())
  );
});

test("get employee's id value", () => {
  const employee = new Employee("John Smith", "1", "johnsmith@gmail.com");

  expect(employee.getId()).toEqual(
    expect.stringContaining(employee.id.toString())
  );
});

test("get employee's email value", () => {
  const employee = new Employee("John Smith", "1", "johnsmith@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

test("get employee's role value", () => {
  const employee = new Employee("John Smith", "1", "johnsmith@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
