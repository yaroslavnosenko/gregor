import {
  Avatar,
  Box,
  Heading,
  Stack,
  Text,
  Link,
  HStack,
  IconButton,
} from "@chakra-ui/react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export const ProfileSidebar = () => {
  return (
    <Stack pos="fixed" w="72" h="100vh" top="0" left="0" py="20" px="6" pb="8">
      <Box py="6">
        <Avatar
          src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60"
          boxSize="20"
          name="S Y"
          bg="gray.300"
        />
        <Heading mt="4" size="lg" fontFamily="sans">
          Candice Black
        </Heading>
        <Text opacity="0.5">Model</Text>
      </Box>
      <Box flex={1}>
        <Heading
          fontWeight="500"
          size="xs"
          opacity={0.5}
          textTransform="uppercase"
        >
          Boards
        </Heading>
        <Stack mt="4" fontWeight="600">
          <Link>Main</Link>
          <Link>Spring</Link>
          <Link>Inspiration</Link>
        </Stack>
      </Box>
      <Box>
        <Heading
          fontWeight="500"
          size="xs"
          opacity={0.5}
          textTransform="uppercase"
          mb="2"
        >
          Location
        </Heading>
        <Link fontWeight="600">New York, USA</Link>
        <HStack mt="6">
          <IconButton
            color="white"
            aria-label="fb"
            borderRadius="full"
            bg="chakra-body-text"
            icon={<FiInstagram />}
          />
          <IconButton
            color="white"
            aria-label="instagram"
            borderRadius="full"
            bg="chakra-body-text"
            icon={<FiFacebook />}
          />
          <IconButton
            color="white"
            aria-label="twitter"
            borderRadius="full"
            bg="chakra-body-text"
            icon={<FiTwitter />}
          />
        </HStack>
      </Box>
    </Stack>
  );
};
