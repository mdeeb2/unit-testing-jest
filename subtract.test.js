const subtract = require("./subtract");

test("accurately adds two numbers", () => {
  expect(subtract(1, 2)).toBe(-1);
});