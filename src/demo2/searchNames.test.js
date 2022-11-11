import searchNames from "./searchNames";

// test 1
test('should return empty result when search keyword not matched', () => {
  // given
  const keyword = "foo";
  // when
  const result = searchNames(keyword);
  // then
  expect(result).toEqual([]);
});

// mock
// 修改导入的 service 对象，将其原本的对象及其 getNames 方法，模拟替换，❗注意：此处与代码位置无关，同样会影响 test 1
jest.mock("./service.js", () => ({
  getNames: jest.fn(() => ['John', 'Bob', 'Paul', 'George']),
}));

// test 2
test('should return target results when search keyword matched', () => {
  // given
  const keyword = "John";
  // when
  const result = searchNames(keyword);
  // then
  expect(result).toEqual(['John']);
});
