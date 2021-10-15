const Manager = require("../lib/Employee");

describe("Manager", () => {
  it("should create a Manager object inheriting properties and methods of Employee class", () => {
    const manager = new Manager("JoeBob", 42, "JoeBob@fake.com", 5);

    expect(manager.officeNumber).toEqual(5);
  });

  describe("getRole", () => {
    it("should return the role 'Manager'", () => {
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
