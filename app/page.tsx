"use client";

import { Flex } from "@chakra-ui/react";
import { Navigation } from "@/components/core";
import { Carousel } from "@/components/landing-page";

export default function Home() {
  return (
    <>
      <Navigation />
      <Flex minH="100vh" pt="20" pb="8">
        <Carousel />
      </Flex>
    </>
  );
}
