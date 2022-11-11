const { sum } = require("./math")

describe("math module", () => {
  test("should return result sum of two numbers plus", () => {
    // given
    const number1 = 1;
    const number2 = 2;
    // when
    const result = sum(number1, number2);
    // then
    expect(result).toEqual(3);
  })
})
