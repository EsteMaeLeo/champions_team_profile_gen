const Intern = require("../lib/Intern.js");

test("creates an Intern object", () => {
  const intern = new Intern(
    "John Smith",
    "1",
    "johnsmith@gmail.com",
    "Vanderbilt University"
  );

  expect(intern.name).toBe("John Smith");
  expect(intern.id).toBe("1");
  expect(intern.email).toBe("johnsmith@gmail.com");
  expect(intern.school).toBe("Vanderbilt University");
});
