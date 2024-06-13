import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { CreateNewTask } from "./CreateNewTask";

import "@testing-library/jest-dom/vitest";

const data = {
  inputPlaceholder: "Create name task!",
};

describe("Create new task", () => {
  afterEach(() => {
    cleanup();
  });

  describe("Render", () => {
    it("render input", () => {
      render(<CreateNewTask onCreate={() => {}} />);

      const input = screen.getByPlaceholderText(data.inputPlaceholder);

      expect(input).toBeInTheDocument();
    });

    it("render button", () => {
      render(<CreateNewTask onCreate={() => {}} />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });

  describe("User Event", () => {
    it("call the callback when the input is not empty", () => {
      const inputValue = "text";

      const mockOnCreate = vi.fn();
      render(<CreateNewTask onCreate={mockOnCreate} />);

      const input = screen.getByPlaceholderText(data.inputPlaceholder);
      const button = screen.getByRole("button");

      fireEvent.change(input, { target: { value: inputValue } });
      fireEvent.click(button);

      expect(mockOnCreate).toHaveBeenCalled();
    });

    it("shold not call the callback when the input is empty", () => {
      const inputValue = "";

      const mockOnCreate = vi.fn();
      render(<CreateNewTask onCreate={mockOnCreate} />);

      const input = screen.getByPlaceholderText(data.inputPlaceholder);
      const button = screen.getByRole("button");

      fireEvent.change(input, { target: { value: inputValue } });
      fireEvent.click(button);

      expect(mockOnCreate).not.toHaveBeenCalled();
    });
  });
});
