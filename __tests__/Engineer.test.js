const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should create an Engineer object inheriting properties and methods of Employee class and setting value of github argument", () => {
    const githubValue = "JoeBobGitHub"
    const engineer = new Engineer(
      "JoeBob",
      42,
      "JoeBob@fake.com",
      "JoeBobGitHub",
    );

    expect(engineer.github).toEqual(githubValue);
  });

  describe("getGithub", () => {
    it("should return engineer github from user argument input", () => {
      const githubValue = "JoeBobGitHub"
      const engineer = new Engineer(
        "JoeBob",
        42,
        "JoeBob@fake.com",
        "JoeBobGitHub"
      );
      expect(engineer.getGithub()).toEqual(githubValue);
    });
  });

  describe("getRole", () => {
    it("should return the role 'Engineer'", () => {
      const engineer = new Engineer(
        "JoeBob",
        42,
        "JoeBob@fake.com",
        "JoeBobGitHub"
      );
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
