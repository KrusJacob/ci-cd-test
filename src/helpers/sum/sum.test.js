import { sum } from "./sum";

describe("sum", function () {
  test("positive", () => {
    expect(sum(5, 5)).toBe(10);
  });
});
