import { createContext } from "react";

export type ContextType = {
  tasks: TaskType[];
  taskStore: TaskType[];
  action: {
    createTask: ICreateTask;
    removeTaskById: IRemoveTask;
    removeCompletedTasks: () => void;
    showActiveTasks: () => void;
    showCompletedTasks: () => void;
    showAllTasks: () => void;
    getTaskById: (id: number) => TaskType | null;
    toggleTaskDone: (id: number) => void;
  };
};

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

export interface ICreateTask {
  (name: string): void;
}

export interface IRemoveTask {
  (id: number): void;
}

export const TodoContext = createContext<ContextType | null>(null);
