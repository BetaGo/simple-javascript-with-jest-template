const { getHello } = require("./index");

it("can receive hello", () => {
  expect(getHello()).toEqual("hello");
});
