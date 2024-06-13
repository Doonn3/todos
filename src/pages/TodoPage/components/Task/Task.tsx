import { Box, Button, Checkbox, Flex, Text } from "@chakra-ui/react";

type PropsType = {
  id: number;
  name: string;
  isDone: boolean;
  onChange: (id: number) => void;
  onRemove: (id: number) => void;
};

export function Task(props: Readonly<PropsType>) {
  return (
    <Box
      w="100%"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      data-testid={`Task-${props.id}`}
    >
      <Flex justify="space-between">
        <Checkbox
          size="lg"
          isChecked={props.isDone}
          onChange={() => props.onChange(props.id)}
        >
          <Text
            fontSize="xl"
            as="span"
            color="white"
            textDecoration={props.isDone ? "line-through" : ""}
          >
            {props.name}
          </Text>
        </Checkbox>
        <Button
          colorScheme="red"
          size="xs"
          onClick={() => props.onRemove(props.id)}
        >
          Del
        </Button>
      </Flex>
    </Box>
  );
}
