import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";

type PropsType = {
  itemCount: number;
  onShowAll: () => void;
  onShowActive: () => void;
  onShowCompleted: () => void;
  onRemoveCompleted: () => void;
};

export function TasksInfo(props: Readonly<PropsType>) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="2px 4px" w={"100%"}>
      <Flex flexDir={"row"} justify={"space-between"}>
        <Text fontSize="xs" color='gray'>{props.itemCount} items left</Text>

        <HStack>
          <Button
            colorScheme="teal"
            variant="outline"
            size="xs"
            onClick={props.onShowAll}
          >
            All
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            size="xs"
            onClick={props.onShowActive}
          >
            Active
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            size="xs"
            onClick={props.onShowCompleted}
          >
            Completed
          </Button>
        </HStack>

        <HStack>
          <Button
            colorScheme="teal"
            variant="outline"
            size="xs"
            onClick={props.onRemoveCompleted}
          >
            Clear completed
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
