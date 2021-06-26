const Manager = require("../lib/Manager");

test("creates an Manager object", () => {
    const xyzzy = new Manager("Xyzzy", 1, "xyzzy@foo.bar", "102B");

    expect(xyzzy.name).toBe("Xyzzy");
    expect(xyzzy.id).toBe(1);
    expect(xyzzy.email).toBe("xyzzy@foo.bar");
    expect(xyzzy.officeNumber).toEqual(expect.any(String || Number));
    expect(xyzzy.role).toBe("Manager");
});

test("gets parameters of Manager object", () => {
    const xyzzy = new Manager("Xyzzy", 1, "xyzzy@foo.bar", "102B");

    expect(xyzzy.getName()).toBe("Xyzzy");
    expect(xyzzy.getId()).toBe(1);
    expect(xyzzy.getEmail()).toBe("xyzzy@foo.bar");
    expect(xyzzy.getRole()).toBe("Manager");
});