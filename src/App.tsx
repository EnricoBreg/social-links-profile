import { Center } from "@chakra-ui/react";
import ProfileCard from "./components/ProfileCard";
import users from "./data/users";

const App = () => {
  return (
    <Center height={"inherit"}>
      <ProfileCard user={users[0]} />
    </Center>
  );
};

export default App;
