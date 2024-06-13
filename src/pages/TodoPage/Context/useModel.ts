import { useState } from "react";
import { ICreateTask, IRemoveTask, TaskType } from "./Context";

export function useModel() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [taskStore, setTaskStore] = useState<TaskType[]>([]);

  const [taskIdCounter, setTaskIdCounter] = useState<number>(0);

  const createTask: ICreateTask = (name) => {
    const task: TaskType = {
      id: taskIdCounter,
      isDone: false,
      title: name,
    };

    setTasks((prevTasks) => [...prevTasks, task]);
    setTaskStore((prevTasks) => [...prevTasks, task]);

    setTaskIdCounter(taskIdCounter + 1);
  };

  const removeTaskById: IRemoveTask = (id) => {
    const tasks = taskStore.filter((task) => task.id !== id);
    setTasks(tasks);
    setTaskStore(tasks);
  };

  const showActiveTasks = () => {
    const result = taskStore.filter((task) => task.isDone === false);

    setTasks(result);
  };

  const showCompletedTasks = () => {
    const result = taskStore.filter((task) => task.isDone === true);

    setTasks(result);
  };

  const removeCompletedTasks = () => {
    const result = taskStore.filter((task) => task.isDone !== true);
    setTaskStore(result);
    setTasks(result);
  };

  const showAllTasks = () => {
    setTasks(taskStore);
  };

  const getTaskById = (id: number) => {
    return tasks.find((task) => task.id === id) ?? null;
  };

  const toggleTaskDone = (id: number) => {
    const tasks = taskStore.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }

      return task;
    });

    setTaskStore(tasks);
    setTasks(tasks);
  };

  return {
    tasks,
    taskStore,
    action: {
      createTask,
      removeTaskById,
      showActiveTasks,
      showCompletedTasks,
      removeCompletedTasks,
      showAllTasks,
      getTaskById,
      toggleTaskDone,
    },
  };
}
