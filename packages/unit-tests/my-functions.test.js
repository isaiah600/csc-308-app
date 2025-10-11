const myFunctions = require("./my-functions");

test("div divides numbers correctly", () => {
  expect(myFunctions.div(10, 2)).toBe(5);
});

test("div with negative numbers", () => {
  expect(myFunctions.div(-10, 2)).toBe(-5);
});

test("containsNumbers true when there is a number", () => {
  expect(myFunctions.containsNumbers("hello2you")).toBe(true);
});

test("containsNumbers false when there are no numbers", () => {
  expect(myFunctions.containsNumbers("hello")).toBe(false);
});
