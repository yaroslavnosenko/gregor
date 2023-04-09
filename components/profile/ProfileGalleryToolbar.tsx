import { HStack, StackProps, Link } from "@chakra-ui/react";

export const ProfileGalleryToolbar = (props: StackProps) => {
  return (
    <HStack py="4" spacing={6} fontWeight="600" {...props}>
      <Link>Main</Link>
      <Link>Spring</Link>
      <Link>Inspiration</Link>
    </HStack>
  );
};
