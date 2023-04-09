"use client";
import { Navigation, PageContainer } from "@/components/core";
import {
  MediaView,
  ProfileGallery,
  ProfileGalleryToolbar,
  ProfileHead,
} from "@/components/profile";
import { useState } from "react";

const ModelProfile = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <Navigation />
      <PageContainer>
        <ProfileHead py="6" />
        <ProfileGalleryToolbar
          mt="6"
          borderBottomWidth={1}
          borderColor="gray.100"
        />
        <ProfileGallery mt="4" onSelect={() => setShow(true)} />
      </PageContainer>
      {show && <MediaView onClose={() => setShow(false)} />}
    </>
  );
};

export default ModelProfile;
