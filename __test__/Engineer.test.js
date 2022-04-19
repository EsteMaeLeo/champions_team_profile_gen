const Engineer = require("../lib/Engineer.js");

test("creates an Engineer object", () => {
  const engineer = new Engineer("John Smith", "1", "johnsmith@gmail.com");

  expect(employee.name).toBe("John Smith");
  expect(employee.id).toBe("1");
  expect(employee.email).toBe("johnsmith@gmail.com");

  console.log(employee);
});
