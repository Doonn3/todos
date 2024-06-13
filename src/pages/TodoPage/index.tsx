import { Box, Text, VStack } from "@chakra-ui/react";

import { TodoPageProvider, useTodoContext } from "./Context";

import { CreateNewTask } from "./components/CreateNewTask";
import { Task } from "./components/Task";
import { TasksInfo } from "./components/TaskInfo";

export function TodoPage() {
  return (
    <TodoPageProvider>
      <PageContent />
    </TodoPageProvider>
  );
}

export function PageContent() {
  const context = useTodoContext();

  const taskArrRender = (_task: typeof context.tasks) => {
    const tasks = _task.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          name={task.title}
          isDone={task.isDone}
          onChange={context.action.toggleTaskDone}
          onRemove={context.action.removeTaskById}
        />
      );
    });
    return (
      <VStack data-testid={`Task-list`} w={"100%"}>
        {tasks}
      </VStack>
    );
  };

  return (
    <section>
      <Text color={"orange"} fontSize={"xx-large"} textAlign={"center"}>
        Todos
      </Text>

      <Box
        bg="black"
        w="100%"
        p={4}
        color="white"
        borderWidth="1px"
        borderRadius="lg"
      >
        <VStack spacing={4}>
          <CreateNewTask
            onCreate={(title) => context.action.createTask(title)}
          />

          {taskArrRender(context.tasks)}

          <TasksInfo
            itemCount={context.tasks.length}
            onShowAll={context.action.showAllTasks}
            onShowActive={context.action.showActiveTasks}
            onShowCompleted={context.action.showCompletedTasks}
            onRemoveCompleted={context.action.removeCompletedTasks}
          />
        </VStack>
      </Box>
    </section>
  );
}
