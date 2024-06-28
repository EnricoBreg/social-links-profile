import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import '@fontsource-variable/inter';

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const extendedTheme = extendTheme({
  config,
  fonts: {
    body: `'Inter', sans-serif`,
  },
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111111",
    },
    green: {
      100: "#f7fee3",
      200: "#e8fcad",
      300: "#d9fb76",
      400: "#caf93f",
      500: "#bbf708",
      600: "#92c006",
      700: "#688904",
      800: "#3e5203",
      900: "#151b01"
    },
    
  },
});

export default extendedTheme;
