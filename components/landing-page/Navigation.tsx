import { Box, Button, HStack, IconButton, Link, Text } from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";

export const Navigation = () => {
  return (
    <HStack
      zIndex={1}
      pos="fixed"
      w="full"
      justify="space-between"
      p="6"
      backdropFilter="blur(20px)"
      bg="rgba(255,255,255,0.8)"
    >
      <HStack spacing="16">
        <Text fontWeight="600" fontSize="xl">
          Gregor
        </Text>
        <HStack spacing="6">
          <Link>Models</Link>
          <Link>Photographers</Link>
          <Link>Agencies</Link>
        </HStack>
      </HStack>
      <HStack spacing="8">
        <HStack>
          <Button color="chakra-body-text" variant="link">
            Sign Up
          </Button>
          <Text fontWeight="700">/</Text>
          <Button color="chakra-body-text" variant="link">
            Login
          </Button>
        </HStack>
        <IconButton
          aria-label="search"
          variant="link"
          color="chakra-body-text"
          icon={<FiSearch strokeWidth={2.5} />}
        />
      </HStack>
    </HStack>
  );
};
