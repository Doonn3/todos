import { ChakraProvider } from "@chakra-ui/react";
import { TodoPage } from "./pages/TodoPage";

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TodoPage />
    </ChakraProvider>
  );
}

export default App;
