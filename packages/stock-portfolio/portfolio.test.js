const { createPortfolio } = require("./portfolio");

//Reflection:
//TDD made me write tests first and small bits of code each time
//it helped me focus on each indivual feature

test("2.1 starts empty", () => {
  const p = createPortfolio();
  expect(p.isEmpty()).toBe(true);
});

test("2.2 empty when nothing owned", () => {
  const p = createPortfolio();
  expect(p.isEmpty()).toBe(true);
});

test("2.3 buy adds shares", () => {
  const p = createPortfolio();
  p.buy("GMR", 5);
  expect(p.isEmpty()).toBe(false);
  expect(p.sharesOf("GMR")).toBe(5);
});

test("2.4 sell subtracts shares", () => {
  const p = createPortfolio();
  p.buy("RBLX", 10);
  p.sell("RBLX", 3);
  expect(p.sharesOf("RBLX")).toBe(7);
});

test("2.5 counts different symbols", () => {
  const p = createPortfolio();
  p.buy("GMR", 5);
  p.buy("RBLX", 10);
  expect(p.uniqueSymbolCount()).toBe(2);
});

test("2.6 removes zero-share stocks", () => {
  const p = createPortfolio();
  p.buy("RBLX", 4);
  p.sell("RBLX", 4);
  expect(p.isEmpty()).toBe(true);
  expect(p.uniqueSymbolCount()).toBe(0);
});

test("2.7 sharesOf unknown returns 0", () => {
  const p = createPortfolio();
  expect(p.sharesOf("MSFT")).toBe(0);
});

test("2.8 cannot oversell", () => {
  const p = createPortfolio();
  p.buy("GMR", 2);
  expect(() => p.sell("GMR", 3)).toThrow(
    "Not possible to sell this number of shares."
  );
});
