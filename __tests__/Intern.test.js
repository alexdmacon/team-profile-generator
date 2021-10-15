const Intern = require("../lib/Employee");

describe("Intern", () => {
  it("should create an Intern object inheriting properties and methods of Employee class", () => {
    const intern = new Intern("JoeBob", 42, "JoeBob@fake.com", "UNT");

    expect(intern.school).toEqual("UNT");
  });

  describe("getSchool", () => {
    it("should return intern school from user argument input", () => {
      const intern = new Intern("JoeBob", 42, "JoeBob@fake.com", "UNT");
      expect(intern.getSchool()).toEqual("UNT");
    });
  });

  describe("getRole", () => {
    it("should return the role 'Intern'", () => {
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
