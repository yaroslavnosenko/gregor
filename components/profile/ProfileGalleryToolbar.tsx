import { Button, HStack } from "@chakra-ui/react";

import { FiDownload, FiEdit2 } from "react-icons/fi";

export const ProfileGalleryToolbar = () => {
  return (
    <HStack minH="16" spacing={6}>
      <Button leftIcon={<FiEdit2 />} variant="link" color="chakra-body-text">
        Edit
      </Button>
      <Button leftIcon={<FiDownload />} variant="link" color="chakra-body-text">
        Download
      </Button>
    </HStack>
  );
};
