const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should create an Engineer object inheriting properties and methods of Employee class", () => {
    const engineer = new Engineer(
      "JoeBob",
      42,
      "JoeBob@fake.com",
      "JoeBobGitHub"
    );

    expect(engineer.github).toEqual("JoeBobGitHub");
  });

  describe("getGithub", () => {
    it("should return engineer github from user argument input", () => {
      const engineer = new Engineer(
        "JoeBob",
        42,
        "JoeBob@fake.com",
        "JoeBobGitHub"
      );
      expect(engineer.getGithub()).toHaveReturnedWith("JoeBobGitHub");
    });
  });

  describe("getRole", () => {
    it("should return the role 'Engineer'", () => {
      expect(engineer.getRole()).toHaveReturnedWith("Engineer");
    });
  });
});
