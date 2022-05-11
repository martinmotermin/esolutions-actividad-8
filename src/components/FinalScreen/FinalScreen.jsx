import { Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";

export const FinalScreen = () => {
  return (
    <VStack verticalAlign="center">
      <Heading>Gracias por completar el formulario!</Heading>
      <Image
        src="https://media1.giphy.com/media/5xtDarmwsuR9sDRObyU/giphy.gif?cid=790b7611c81ab92ce58e21f253fd32e29d53167085994ef4&rid=giphy.gif&ct=g"
        alt="ty-michael-scott"
      />
    </VStack>
  );
};
