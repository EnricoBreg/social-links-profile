import { Box, Center, Flex } from "@chakra-ui/react";
import ProfileCard from "./components/ProfileCard";
import SignFooter from "./components/SignFooter";
import TogglerColorMode from "./components/TogglerColorMode";
import users from "./data/users";

const App = () => {
  return (
    <Center height="full">
      <Flex
        height="full"
        direction="column"
        justify="space-evenly"
        align="center"
      >
        <Flex direction="column" align="center">
          <ProfileCard user={users[0]} />
          <TogglerColorMode />
        </Flex>
        <Box alignSelf="center">
          <SignFooter />
        </Box>
      </Flex>
    </Center>
  );
};

export default App;
