"use client";
import { Box } from "@chakra-ui/react";
import { Navigation } from "@/components/core";
import {
  ProfileGallery,
  ProfileGalleryToolbar,
  ProfileSidebar,
} from "@/components/profile";

const ModelProfile = () => {
  return (
    <Box pt="20">
      <Navigation />
      <ProfileSidebar />
      <Box pl="72">
        <Box px="6">
          <ProfileGalleryToolbar />
          <ProfileGallery />
        </Box>
      </Box>
    </Box>
  );
};

export default ModelProfile;
