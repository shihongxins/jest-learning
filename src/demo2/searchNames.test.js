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
