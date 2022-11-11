import service from "./service";

const searchNames = (keyword = "") => {
  return service.getNames().filter((name) => String(name).includes(keyword)).slice(0, 3);
}

const functionNotUsedAndTested = (input) => {
  return `Hello ${input}`;
};

export default searchNames;
