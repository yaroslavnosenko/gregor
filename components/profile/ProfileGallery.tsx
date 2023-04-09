import { Box, BoxProps, Image } from "@chakra-ui/react";

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

export interface ProfileGalleryProps extends BoxProps {
  onSelect: () => void;
}

export const ProfileGallery = ({ onSelect, ...props }: ProfileGalleryProps) => {
  return (
    <Box style={{ columnCount: 3 }} columnGap="4" {...props}>
      {urls.map((url) => (
        <Box onClick={onSelect} key={url} pb="4">
          <Image alt="" src={url} />
        </Box>
      ))}
      {urls.map((url) => (
        <Box onClick={onSelect} key={url} pb="4">
          <Image alt="" src={url} />
        </Box>
      ))}
    </Box>
  );
};
