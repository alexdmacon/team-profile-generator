const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should create an Intern object inheriting properties and methods of Employee class and setting value of school argument", () => {
    const schoolValue = "UNT";
    const intern = new Intern("JoeBob", 42, "JoeBob@fake.com", "UNT");
    expect(intern.school).toEqual(schoolValue);
  });

  describe("getSchool", () => {
    it("should return intern school from user argument input", () => {
      const schoolValue = "UNT";

      const intern = new Intern("JoeBob", 42, "JoeBob@fake.com", "UNT");
      expect(intern.getSchool()).toEqual(schoolValue);
    });
  });

  describe("getRole", () => {
    it("should return the role 'Intern'", () => {
      const intern = new Intern("JoeBob", 42, "JoeBob@fake.com", "UNT");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
