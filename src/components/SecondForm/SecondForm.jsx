import {
  Box,
  Button,
  Flex,
  FormControl,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const SecondForm = ({ handleChange, handleSubmit }) => {
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" width={"70%"}>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <VStack spacing={10} align="flex-start">
            <FormControl>
              <Text>¿Qué te pareció el formulario?</Text>
              <Textarea
                isRequired={true}
                height="150px"
                resize="none"
                name="question1"
              ></Textarea>
            </FormControl>
            <FormControl>
              <Text>¿Qué te gustaría cambiar?</Text>
              <Textarea
                isRequired={true}
                height="150px"
                resize="none"
                name="question2"
              ></Textarea>
            </FormControl>
            <FormControl>
              <Text>¿Querés saber más sobre Chakra UI?</Text>
              <Textarea
                isRequired={true}
                height="150px"
                resize="none"
                name="question3"
              ></Textarea>
            </FormControl>
            <Button type="submit" colorScheme="purple" isFullWidth>
              Enviar
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};
