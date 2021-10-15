const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should create an object as an instance of the Employee class using inputted arguments as properties", () => {
    const employee = new Employee("JoeBob", 42, "JoeBob@fake.com");

    expect(employee.name).toEqual("JoeBob");
    expect(employee.id).toEqual(42);
    expect(employee.email).toEqual("JoeBob@fake.com");
  });

  describe("getName", () => {
    it("should return employee name from user argument input", () => {
      const employee = new Employee("JoeBob", 42, "JoeBob@fake.com");

      expect(employee.getName()).toEqual("JoeBob");
    });
  });

  describe("getId", () => {
    it("should return employee ID from user argument input", () => {
      const employee = new Employee("JoeBob", 42, "JoeBob@fake.com");

      expect(employee.getId()).toEqual(42);
    });
  });

  describe("getEmail", () => {
    it("should return employee email from user argument input", () => {
      const employee = new Employee("JoeBob", 42, "JoeBob@fake.com");

      expect(employee.getEmail()).toEqual("JoeBob@fake.com");
    });
  });

  describe("getRole", () => {
    it("should return the role 'Employee'", () => {
      const employee = new Employee("JoeBob", 42, "JoeBob@fake.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
