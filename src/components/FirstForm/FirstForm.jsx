import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export const FirstForm = ({ handleSubmit, handleChange }) => {
  const [radio, setRadio] = useState();

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" width="70%">
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="name">Nombre</FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                variant="filled"
                isRequired={true}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastName">Apellido</FormLabel>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                variant="filled"
                isRequired={true}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="birthDate">Fecha de nacimiento</FormLabel>
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                variant="filled"
                isRequired={true}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="address">Dirección</FormLabel>
              <Input
                id="address"
                name="address"
                type="text"
                variant="filled"
                isRequired={true}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                isRequired={true}
              />
            </FormControl>
            <FormControl isRequired={true}>
              <RadioGroup name="gender" onChange={setRadio} value={radio}>
                <Stack direction={{ base: "column", md: "row" }}>
                  <Radio value="male">Hombre</Radio>
                  <Radio value="female">Mujer</Radio>
                  <Radio value="notEspecific">Prefiero no aclarar</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                isRequired={true}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="repeatPassword">Repetir Contrseña</FormLabel>
              <Input
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                variant="filled"
                isRequired={true}
              />
            </FormControl>
            <Button type="submit" colorScheme="purple" isFullWidth>
              Siguiente
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};
