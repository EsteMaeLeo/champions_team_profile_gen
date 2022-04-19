const Engineer = require("../lib/Engineer.js");

test("creates an Engineer object", () => {
  const engineer = new Engineer(
    "John Smith",
    "1",
    "johnsmith@gmail.com",
    "https://github.com/karl"
  );

  expect(engineer.name).toBe("John Smith");
  expect(engineer.id).toBe("1");
  expect(engineer.email).toBe("johnsmith@gmail.com");
  expect(engineer.github).toBe("https://github.com/karl");
});
