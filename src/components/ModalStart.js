import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import Logo1 from "../assets/images/resources/logo-1.png";

export default function ModalStart() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          style={{
            padding: "20px",
            margin: "20px",
            color: "#1239ac",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ModalHeader>
            <img
              src={Logo1}
              alt='Spark Clean Australia'
              srcset=''
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            For Commercial Cleaning: $48 per hour <br />
            Contact us for Quotation
            <br />
            <span className='m-2 icon-phone-call'></span>
            <a href='tel:0493922822'>0493 922 822</a>
            <br />
            <span className='m-2 icon-message'></span>
            <a href='mailto:admin@sparkcleanaustralia.com.au'>
              admin@sparkcleanaustralia.com.au
            </a>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
