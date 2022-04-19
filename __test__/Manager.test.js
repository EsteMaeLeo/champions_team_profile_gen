const Manager = require("../lib/Manager.js");

test("creates an Manager object", () => {
  const manager = new Manager("John Smith", "1", "johnsmith@gmail.com", "0001");

  expect(manager.name).toBe("John Smith");
  expect(manager.id).toBe("1");
  expect(manager.email).toBe("johnsmith@gmail.com");
  expect(manager.officeNumber).toBe("0001");
});
