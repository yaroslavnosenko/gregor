import { Box, Flex, SimpleGrid, SimpleGridProps, Text } from "@chakra-ui/react";
import styles from "./Carousel.module.css";

const urls = [
  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1440508319978-8b67875e39d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
];

const ImageBox = ({ url }: { url: string }) => {
  return (
    <Box px="4" borderRightWidth={1} borderColor="gray.100" pos="relative">
      <Box h="1px" mb="4" bg="gray.100" />
      <Box
        borderRadius="lg"
        pos="relative"
        h="calc(100% - 34px)"
        w="full"
        bgSize="cover"
        bgImage={url}
        borderTopRightRadius="none"
        borderBottomLeftRadius="none"
      />
      <Box h="1px" mt="4" bg="gray.100" />
    </Box>
  );
};

const TextBox = ({ text }: { text: string }) => {
  return (
    // @ts-ignore
    <Flex
      borderRightWidth={1}
      borderColor="gray.100"
      align="center"
      justify="center"
      p="8"
    >
      <Text fontSize="4xl" fontWeight="bold" fontFamily="sans">
        {text}
      </Text>
    </Flex>
  );
};

const Page = (props: SimpleGridProps) => {
  return (
    // @ts-ignore
    <SimpleGrid {...props} minW="2280px" minH="100%" columns={6} pos="absolute">
      <TextBox text="Candice Black" />
      <ImageBox url={urls[0]} />
      <TextBox text="Isabella Oliver" />
      <ImageBox url={urls[1]} />
      <TextBox text="Cindy Lawrence" />
      <ImageBox url={urls[2]} />

      <ImageBox url={urls[3]} />
      <TextBox text="Annie Bailey" />
      <ImageBox url={urls[4]} />
      <TextBox text="Olivia Stevens" />
      <ImageBox url={urls[5]} />
      <TextBox text="Yvonne Mills" />

      <TextBox text="Leslie Ortiz" />
      <ImageBox url={urls[6]} />
      <TextBox text="Stacy Hill" />
      <ImageBox url={urls[7]} />
      <TextBox text="Rita Robertson" />
      <ImageBox url={urls[8]} />
    </SimpleGrid>
  );
};

export const Carousel = () => {
  return (
    <Box overflow="hidden" minH="2xl" minW="100vw" pos="relative">
      <Page className={styles.first} />
      <Page className={styles.second} />
    </Box>
  );
};
