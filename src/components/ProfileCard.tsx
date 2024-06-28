import {
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import User from "../entities/User";

interface Props {
  user: User;
}

const ProfileCard = ({ user }: Props) => {
  return (
    <Card borderRadius={10} padding={{ sm: 2, md: 4 }} margin={2}>
      <CardBody>
        <VStack spacing={5} align="center">
          <Image src={user.avatar_image} borderRadius="full" boxSize="80px" />
          <Box textAlign="center">
            <Text as="h5" fontWeight={700} fontSize="x-large">
              {user.name}
            </Text>
            <Text as="span" fontSize="sm" color="green.500" fontWeight="bold">
              {user.location}
            </Text>
          </Box>
          <Text as="q" fontSize={14} textAlign="center">
            {user.biography}
          </Text>
          <VStack spacing={4} width="100%">
            {user.links.map((link) => (
              <Button
                key={link.slug}
                width={"100%"}
                fontSize="sm"
                fontWeight="bold"
                padding="0.5rem 5.25rem"
                _hover={{ bg: "green.500", color: "gray.900" }}
              >
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
