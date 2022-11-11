import searchNames from "./searchNames";
import { getNames } from "./service"

// mock
// 修改导入的 service 对象，将其原本的对象及其 getNames 方法，模拟替换;
// 1. ❗注意：此处与代码位置无关，同样会影响 test 1
// 2. 如果要避免上述情况，或者说有多出需要不同的 mock 值，可以将 mock 的实现逻辑独立出来，先单独引入原 getNames ，然后在每一个测试处单独实现；
jest.mock("./service.js", () => ({
  getNames: jest.fn(),
}));

// test 1
test('should return empty result when search keyword not matched', () => {
  // given
  const keyword = "foo";
  // 单独实现
  getNames.mockImplementation(() => []);
  // when
  const result = searchNames(keyword);
  // then
  expect(result).toEqual([]);
});

// test 2
test('should return target results when search keyword matched', () => {
  // given
  const keyword = "John";
  // 单独实现
  getNames.mockImplementation(() => ['John', 'Bob', 'Paul', 'George']);
  // when
  const result = searchNames(keyword);
  // then
  expect(result).toEqual(['John']);
});

// test 3
test('should return less than 3 result when search keyword matched', () => {
  // given
  const keyword = "a";
  // 单独实现
  getNames.mockImplementation(() => ['John', 'Bob', 'Paul', 'George', 'Tom']);
  // when
  const result = searchNames(keyword);
  // then
  expect(result.length).toBeLessThan(3);
});

// test 4
test('should return empty result when keyword is undefined or null', () => {
  // given
  let keyword;
  // 单独实现
  getNames.mockImplementation(() => ['John', 'Bob', 'Paul', 'George', 'Tom']);
  // when
  const resultForUndef = searchNames(keyword);
  console.log(resultForUndef);
  const resultForNull = searchNames(keyword = null);
  // then
  expect(resultForUndef).toEqual([]);
  expect(resultForNull).toEqual([]);
});
