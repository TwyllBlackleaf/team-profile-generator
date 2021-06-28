const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const generateHTML = require("../src/generateHTML");

test("generates HTML page", () => {
    const manager = new Manager("Xyzzy", 1, "xyzzy@foo.bar", "102B");
    const engineer = [new Engineer("Foo", 2, "foo@bar.baz", "Octocat")];
    const intern = [new Intern("Bar", 3, "bar@fizz.buzz", "Miskatonic University")]
})