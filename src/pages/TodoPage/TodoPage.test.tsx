import { afterEach, describe, expect, it } from "vitest";

import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";

import { TodoPage } from "./index";

import "@testing-library/jest-dom/vitest";

describe("Test Todo Page", () => {
  afterEach(() => {
    cleanup();
  });

  it("Create new Task and delete task", async () => {
    render(<TodoPage />);
    const taskList = screen.getByTestId("Task-list");

    expect(taskList.children.length).toBe(0);

    const input = screen.getByTestId<HTMLInputElement>("CreateNewTask-input");
    const btn = screen.getByTestId("CreateNewTask-button");

    fireEvent.change(input, { target: { value: "Task 1" } });

    fireEvent.click(btn);
    expect(taskList.children.length).toBe(1);

    const task = screen.getByTestId(`Task-${0}`);
    const taskButtonDelet = within(task).getByText("Del");
    fireEvent.click(taskButtonDelet);
    expect(taskList.children.length).toBe(0);
  });
});
