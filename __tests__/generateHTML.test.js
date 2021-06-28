const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const generateHTML = require("../src/generateHTML");

test("generates HTML page", () => {
    const manager = new Manager("Xyzzy", 1, "xyzzy@foo.bar", "102B");
    const engineer = [new Engineer("Foo", 2, "foo@bar.baz", "Octocat")];
    const intern = [new Intern("Bar", 3, "bar@fizz.buzz", "Miskatonic University")];

    const generatedSite = generateHTML(manager, engineer, intern);

    expect(generatedSite).toEqual(expect.stringContaining("1"));
    expect(generatedSite).toEqual(expect.stringContaining("Xyzzy"));
    expect(generatedSite).toEqual(expect.stringContaining("xyzzy@foo.bar"));
    expect(generatedSite).toEqual(expect.stringContaining("102B"));

    expect(generatedSite).toEqual(expect.stringContaining("2"));
    expect(generatedSite).toEqual(expect.stringContaining("Foo"));
    expect(generatedSite).toEqual(expect.stringContaining("foo@bar.baz"));
    expect(generatedSite).toEqual(expect.stringContaining("Octocat"));

    expect(generatedSite).toEqual(expect.stringContaining("3"));
    expect(generatedSite).toEqual(expect.stringContaining("Bar"));
    expect(generatedSite).toEqual(expect.stringContaining("bar@fizz.buzz"));
    expect(generatedSite).toEqual(expect.stringContaining("Miskatonic University"));
})