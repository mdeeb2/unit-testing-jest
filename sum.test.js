  
const { test } = require("@jest/globals");
const sum = require("./sum");

test("accurately adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});