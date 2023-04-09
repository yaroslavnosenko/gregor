import {
  Box,
  Heading,
  Text,
  HStack,
  IconButton,
  Button,
  SimpleGridProps,
  SimpleGrid,
  Image,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export const ProfileHead = (props: SimpleGridProps) => {
  return (
    <SimpleGrid alignItems="center" {...props} columns={2} gap={16}>
      <Box>
        <Heading size="xl" fontFamily="sans">
          Candice Black
        </Heading>
        <Text opacity="0.5">Model • New York, USA</Text>
        <HStack py="8" spacing={2}>
          <Button bg="black" color="white">
            Hire
          </Button>
          <Button>Message</Button>
        </HStack>
        <Box>
          <Text mb={4} fontWeight={600}>
            Parameters
          </Text>
          <Wrap lineHeight={1} spacing={4}>
            <WrapItem>
              <Text opacity="0.5">Height: 175 cm</Text>
            </WrapItem>
            <WrapItem>
              <Text opacity="0.5">Measurements: 83 / 59 / 86</Text>
            </WrapItem>
            <WrapItem>
              <Text opacity="0.5">Hair: brown</Text>
            </WrapItem>
            <WrapItem>
              <Text opacity="0.5">Eyes: brown</Text>
            </WrapItem>
            <WrapItem>
              <Text opacity="0.5">Shoes: 39</Text>
            </WrapItem>
          </Wrap>
        </Box>
        <Box mt="8">
          <Text mb={4} fontWeight={600}>
            Agencies
          </Text>
          <Wrap lineHeight={1} spacing={4}>
            <WrapItem>
              <Text opacity="0.5">La Mode HZ</Text>
            </WrapItem>
            <WrapItem>
              <Text opacity="0.5">Funs Shz</Text>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
      <Box>
        <Image
          fit="cover"
          maxH={96}
          w="full"
          alt=""
          src={
            "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1200&q=60"
          }
        />
      </Box>
    </SimpleGrid>
  );
};
