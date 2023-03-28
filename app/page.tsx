"use client";

import { Carousel, Navigation } from "@/components/landing-page";
import { Box, Flex } from "@chakra-ui/react";

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
