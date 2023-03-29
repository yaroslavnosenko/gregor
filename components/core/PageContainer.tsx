import { Container, ContainerProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const PageContainer = (props: PropsWithChildren<ContainerProps>) => {
  return <Container {...props} maxW="1488px" px="6" />;
};
