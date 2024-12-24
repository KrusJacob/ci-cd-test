import { division } from "./division";

describe("division", () => {
  test("positive", () => {
    expect(division(10, 5)).toBe(2);
  });
});
