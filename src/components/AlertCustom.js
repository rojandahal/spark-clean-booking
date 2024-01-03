import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function AlertCustom({ alert, setAlert }) {
  return alert ? (
    <div className='alert-modal'>
      <Alert
        status='success'
        style={{ backgroundColor: "#1239AC", color: "#fff" }}
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon
          boxSize='40px'
          style={{ color: "#fff" }}
          mr={0}
        />
        <AlertTitle
          mt={4}
          mb={1}
          fontSize='lg'
        >
          Booking submitted!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thanks for submitting your booking. Our team will get back to you
          soon.
        </AlertDescription>
      </Alert>
    </div>
  ) : null;
}
