const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should create a Manager object inheriting properties and methods of Employee class and setting value of office number", () => {
    const manager = new Manager("JoeBob", 42, "JoeBob@fake.com", 5);

    expect(manager.officeNumber).toEqual(5);
  });

  describe("getRole", () => {
    it("should return the role 'Manager'", () => {
      const manager = new Manager("JoeBob", 42, "JoeBob@fake.com", 5);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
