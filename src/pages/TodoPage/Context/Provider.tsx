import { ReactNode } from "react";

import { TodoContext } from "./Context";
import { useModel } from "./useModel";

type PropsType = {
  children: ReactNode;
};

export function TodoPageProvider(props: Readonly<PropsType>) {
  const model = useModel();

  return (
    <TodoContext.Provider value={model}>{props.children}</TodoContext.Provider>
  );
}
