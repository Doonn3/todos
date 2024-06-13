import { afterEach, describe, expect, it, vi } from "vitest";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { Task } from "./Task";

import "@testing-library/jest-dom/vitest";

describe("Test Task", () => {
  afterEach(() => {
    cleanup();
  });

  describe("Render", () => {
    it("CheckBox", () => {
      render(
        <Task
          id={0}
          name="Test"
          isDone={false}
          onChange={() => {}}
          onRemove={() => {}}
        />
      );
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
    });

    it("Text", () => {
      render(
        <Task
          id={0}
          name="Test"
          isDone={false}
          onChange={() => {}}
          onRemove={() => {}}
        />
      );

      const text = screen.getByText("Test");
      expect(text).toBeInTheDocument();
    });

    it("Delete Button", () => {
      render(
        <Task
          id={0}
          name="Test"
          isDone={false}
          onChange={() => {}}
          onRemove={() => {}}
        />
      );
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });

  describe("User Event", () => {
    it("Is Change Task", () => {
      let mockIsDone = false;

      const mockChange = vi.fn(() => {
        mockIsDone = !mockIsDone;
      });

      render(
        <Task
          id={0}
          name="Test"
          isDone={mockIsDone}
          onChange={() => mockChange()}
          onRemove={() => {}}
        />
      );
      const checkbox = screen.getByRole("checkbox");

      fireEvent.click(checkbox);
      expect(mockChange).toHaveBeenCalled();
      expect(mockIsDone).toEqual(true);

      fireEvent.click(checkbox);
      expect(mockChange).toHaveBeenCalled();
      expect(mockIsDone).toEqual(false);
    });

    it("Remove", () => {
      const mockRemove = vi.fn();
      render(
        <Task
          id={0}
          name="Test"
          isDone={false}
          onChange={() => {}}
          onRemove={mockRemove}
        />
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(mockRemove).toHaveBeenCalled();
    });
  });
});
