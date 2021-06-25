const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
    const xyzzy = new Engineer("Xyzzy", 1, "xyzzy@foo.bar", "xyzzygithub");

    expect(xyzzy.name).toBe("Xyzzy");
    expect(xyzzy.id).toBe(1);
    expect(xyzzy.email).toBe("xyzzy@foo.bar");
    expect(xyzzy.github).toBe("xyzzygithub");
    expect(xyzzy.role).toBe("Engineer");
});

test("gets parameters of Engineer object", () => {
    const xyzzy = new Engineer("Xyzzy", 1, "xyzzy@foo.bar", "xyzzygithub");

    expect(xyzzy.getName()).toBe("Xyzzy");
    expect(xyzzy.getId()).toBe(1);
    expect(xyzzy.getEmail()).toBe("xyzzy@foo.bar");
    expect(xyzzy.getGithub()).toBe("xyzzygithub");
    expect(xyzzy.getRole()).toBe("Engineer");
});