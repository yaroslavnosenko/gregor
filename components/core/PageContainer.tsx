import { enums } from "@/theme";
import { Container, ContainerProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const PageContainer = (props: PropsWithChildren<ContainerProps>) => {
  return (
    <Container {...props} maxW="container.xl" px="6" pt={enums.navbarHeight} />
  );
};
