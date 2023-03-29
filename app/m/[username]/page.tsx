"use client";
import { Box, HStack, Stack } from "@chakra-ui/react";
import { Navigation, PageContainer } from "@/components/core";
import {
  ProfileGallery,
  ProfileGalleryToolbar,
  ProfileSidebar,
} from "@/components/profile";

const ModelProfile = () => {
  return (
    <>
      <Navigation />
      <PageContainer>
        <Stack direction="row" alignItems="start" spacing="6">
          <Box pos="sticky" top="20">
            <ProfileSidebar />
          </Box>
          <Box pt="20">
            <ProfileGalleryToolbar />
            <ProfileGallery />
          </Box>
        </Stack>
      </PageContainer>
    </>
  );
};

export default ModelProfile;
