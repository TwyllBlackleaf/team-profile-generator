const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
    const xyzzy = new Employee("Xyzzy", 1, "xyzzy@foo.bar");

    expect(xyzzy.name).toBe("Xyzzy");
    expect(xyzzy.id).toBe(1);
    expect(xyzzy.email).toBe("xyzzy@foo.bar");
    expect(xyzzy.role).toBe("Employee");
});

test("gets parameters of Employee object", () => {
    const xyzzy = new Employee("Xyzzy", 1, "xyzzy@foo.bar");

    expect(xyzzy.getName()).toBe("Xyzzy");
    expect(xyzzy.getId()).toBe(1);
    expect(xyzzy.getEmail()).toBe("xyzzy@foo.bar");
    expect(xyzzy.getRole()).toBe("Employee");
});