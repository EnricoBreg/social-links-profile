import { Button, useColorMode } from "@chakra-ui/react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const TogglerColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </Button>
    </>
  );
};

export default TogglerColorMode;
