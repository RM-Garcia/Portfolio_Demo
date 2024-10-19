import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Textarea,
  Heading,
  Flex,
  Box,
} from '@chakra-ui/react';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';

const ContactMeSection = () => {
  const { submit, response } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      type: Yup.string(),
      comment: Yup.string().min(25, 'Must be at least 25 characters').required('Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      const response = await submit(values);
      if (response.type === 'success') {
        onOpen({ title: `Thank you ${values.firstName}`, description: response.message });
        resetForm();
      } else {
        onOpen({ title: 'Error', description: response.message });
      }
    },
  });

  return (
    <Flex direction="column" align="center" justify="center" p={8} id="contactme-section">
      <Heading mb={6}>Contact Me</Heading>
      <Box
        width={{ base: '100%', sm: '400px' }} // Responsive width
        boxShadow="lg" // Adding a shadow for better visibility
        borderRadius="md"
        p={6}
        bg="white" // Background color for the form container
      >
        <form onSubmit={formik.handleSubmit}>
          <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
            <FormLabel>Name</FormLabel>
            <Input
              {...formik.getFieldProps('firstName')}
              size="lg" // Larger input size
            />
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.email && formik.errors.email} mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              {...formik.getFieldProps('email')}
              size="lg" // Larger input size
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Type of enquiry</FormLabel>
            <Input
              {...formik.getFieldProps('type')}
              size="lg" // Larger input size
            />
          </FormControl>

          <FormControl isInvalid={formik.touched.comment && formik.errors.comment} mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              {...formik.getFieldProps('comment')}
              size="lg" // Larger input size
            />
            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
          </FormControl>

          <Button type="submit" isLoading={response?.isLoading} mt={6} size="lg" colorScheme="teal">
            Submit
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactMeSection;
