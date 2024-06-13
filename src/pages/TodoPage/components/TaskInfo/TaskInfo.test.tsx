import { afterEach, describe, expect, it, vi } from "vitest";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { TasksInfo } from "./TaskInfo";

import "@testing-library/jest-dom/vitest";

const mockFun = vi.fn();

describe("Test TaskInfo", () => {
  afterEach(() => {
    cleanup();
  });

  describe("Render", () => {
    it("All Button", () => {
      render(
        <TasksInfo
          itemCount={0}
          onShowAll={mockFun}
          onShowActive={mockFun}
          onShowCompleted={mockFun}
          onRemoveCompleted={mockFun}
        />
      );
      const button = screen.getByText("All");
      expect(button).toBeInTheDocument();
    });
    it("Active Button", () => {
      render(
        <TasksInfo
          itemCount={0}
          onShowAll={mockFun}
          onShowActive={mockFun}
          onShowCompleted={mockFun}
          onRemoveCompleted={mockFun}
        />
      );
      const button = screen.getByText("Active");
      expect(button).toBeInTheDocument();
    });
    it("Completed Button", () => {
      render(
        <TasksInfo
          itemCount={0}
          onShowAll={mockFun}
          onShowActive={mockFun}
          onShowCompleted={mockFun}
          onRemoveCompleted={mockFun}
        />
      );
      const button = screen.getByText("Completed");
      expect(button).toBeInTheDocument();
    });
    it("Clear completed Button", () => {
      render(
        <TasksInfo
          itemCount={0}
          onShowAll={mockFun}
          onShowActive={mockFun}
          onShowCompleted={mockFun}
          onRemoveCompleted={mockFun}
        />
      );
      const button = screen.getByText("Clear completed");
      expect(button).toBeInTheDocument();
    });
  });

  describe("User Event", () => {
    it("All Click", () => {
      render(
        <TasksInfo
          itemCount={0}
          onShowAll={mockFun}
          onShowActive={mockFun}
          onShowCompleted={mockFun}
          onRemoveCompleted={mockFun}
        />
      );
      const button = screen.getByText("All");
      fireEvent.click(button);
      expect(mockFun).toHaveBeenCalled();
    });
    it("Active Click", () => {
      render(
        <TasksInfo
          itemCount={0}
          onShowAll={mockFun}
          onShowActive={mockFun}
          onShowCompleted={mockFun}
          onRemoveCompleted={mockFun}
        />
      );
      const button = screen.getByText("Active");
      fireEvent.click(button);
      expect(mockFun).toHaveBeenCalled();
    });
    it("Completed Click", () => {
      render(
        <TasksInfo
          itemCount={0}
          onShowAll={mockFun}
          onShowActive={mockFun}
          onShowCompleted={mockFun}
          onRemoveCompleted={mockFun}
        />
      );
      const button = screen.getByText("Completed");
      fireEvent.click(button);
      expect(mockFun).toHaveBeenCalled();
    });
    it("Clear completed Click", () => {
      render(
        <TasksInfo
          itemCount={0}
          onShowAll={mockFun}
          onShowActive={mockFun}
          onShowCompleted={mockFun}
          onRemoveCompleted={mockFun}
        />
      );
      const button = screen.getByText("Clear completed");
      fireEvent.click(button);
      expect(mockFun).toHaveBeenCalled();
    });
  });
});
