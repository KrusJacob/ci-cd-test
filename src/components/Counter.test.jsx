import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  test("should be positive", () => {
    render(<Counter />);
    const count = screen.getByText(/value: 0/i);
    const btnCounter = screen.getByText("increment");
    expect(count).toBeInTheDocument();

    expect(btnCounter).toBeInTheDocument();
    fireEvent.click(btnCounter);
    const updatedCount = screen.getByText(/value: 1/i);
    expect(updatedCount).toBeInTheDocument();
  });
});
