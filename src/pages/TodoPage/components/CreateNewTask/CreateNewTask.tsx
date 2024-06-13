import { useState } from "react";

import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

interface PropsType {
  onCreate: (title: string) => void;
}

export function CreateNewTask(props: Readonly<PropsType>) {
  const [inputValue, setInputValue] = useState<string>("");

  const onClick = () => {
    if (inputValue.trim()) {
      props.onCreate(inputValue);
      setInputValue("");
    }
  };

  return (
    <InputGroup size="md">
      <Input
        data-testid="CreateNewTask-input"
        color="white"
        placeholder="Create name task!"
        _placeholder={{ color: "gray" }}
        size="md"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <InputRightElement width="4.5rem">
        <Button
          data-testid="CreateNewTask-button"
          colorScheme="orange"
          onClick={onClick}
        >
          Create
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
