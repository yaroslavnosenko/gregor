import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export interface MediaViewProps {
  onClose: () => void;
}

export const MediaView = ({ onClose }: MediaViewProps) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>asd</ModalBody>
      </ModalContent>
    </Modal>
  );
};
