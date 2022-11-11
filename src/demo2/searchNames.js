import service from "./service";

const searchNames = (keyword = "") => {
  // 排除空字符串 BUG
  if (!keyword) {
    return [];
  }
  return service.getNames().filter((name) => String(name).toUpperCase().includes(keyword.toUpperCase())).slice(0, 3);
}

const functionNotUsedAndTested = (input) => {
  return `Hello ${input}`;
};

export default searchNames;
