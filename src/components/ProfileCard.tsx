import {
  Card,
  Text,
  Image,
  Button,
  VStack,
  CardBody,
  Box,
} from "@chakra-ui/react";
import User from "../entities/User";

interface Props {
  user: User;
}

const ProfileCard = ({ user }: Props) => {
  return (
    <Card borderRadius={10} padding={5}>
      <CardBody>
        <VStack spacing={5} align="center">
          <Image src={user.avatar_image} borderRadius="full" boxSize="80px" />
          <Box>
            <Text as="h5" fontWeight={700} fontSize={"1.5rem"}>
              {user.name}
            </Text>
            <Text as="span">{user.location}</Text>
          </Box>
          <Text as="q" fontSize={14}>
            {user.biography}
          </Text>
          <VStack spacing={4} width="100%">
            {user.links.map((link) => (
              <Button key={link.slug} width={"100%"}>
                {link.name}
              </Button>
            ))}
          </VStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
