const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
    const xyzzy = new Intern("Xyzzy", 1, "xyzzy@foo.bar", "Miskatonic University");

    expect(xyzzy.name).toBe("Xyzzy");
    expect(xyzzy.id).toBe(1);
    expect(xyzzy.email).toBe("xyzzy@foo.bar");
    expect(xyzzy.school).toBe("Miskatonic University");
    expect(xyzzy.role).toBe("Intern");
});

test("gets parameters of Intern object", () => {
    const xyzzy = new Intern("Xyzzy", 1, "xyzzy@foo.bar", "Miskatonic University");

    expect(xyzzy.getName()).toBe("Xyzzy");
    expect(xyzzy.getId()).toBe(1);
    expect(xyzzy.getEmail()).toBe("xyzzy@foo.bar");
    expect(xyzzy.getSchool()).toBe("Miskatonic University");
    expect(xyzzy.getRole()).toBe("Intern");
});