import { useContext } from "react";
import { TodoContext } from "./Context";

export { TodoPageProvider } from "./Provider";
export { TodoContext };

export function useTodoContext() {
  const context = useContext(TodoContext);

  if (context === null) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }

  return context;
}
