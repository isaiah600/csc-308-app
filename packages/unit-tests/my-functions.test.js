const myFunctions = require("./my-functions");

test("div divides numbers correctly", () => {
  expect(myFunctions.div(10, 2)).toBe(5);
});

test("div with negative numbers", () => {
  expect(myFunctions.div(-10, 2)).toBe(-5);
});

test("div with negative denominator", () => {
  expect(myFunctions.div(10, -2)).toBe(-5);
});

test("div by zero returns Infinity (default JS behavior)", () => {
  expect(myFunctions.div(5, 0)).toBe(Infinity);
});

test("div of zero numerator", () => {
  expect(myFunctions.div(0, 5)).toBe(0);
});

test("div handles floating point division", () => {
  expect(myFunctions.div(0.3, 0.1)).toBeCloseTo(3);
});

test("containsNumbers true when there is a number", () => {
  expect(myFunctions.containsNumbers("hello2you")).toBe(true);
});

test("containsNumbers false when there are no numbers", () => {
  expect(myFunctions.containsNumbers("hello")).toBe(false);
});
test("containsNumbers false when there are spaces only", () => {
  expect(myFunctions.containsNumbers("hello world")).toBe(false);
});

test("containsNumbers false when punctuation only", () => {
  expect(myFunctions.containsNumbers("hello!")).toBe(false);
});

test("containsNumbers true when number at start, middle, or end", () => {
  expect(myFunctions.containsNumbers("1start")).toBe(true);
  expect(myFunctions.containsNumbers("mi2ddle")).toBe(true);
  expect(myFunctions.containsNumbers("end9")).toBe(true);
});

test("containsNumbers false when string is empty", () => {
  expect(myFunctions.containsNumbers("")).toBe(false);
});