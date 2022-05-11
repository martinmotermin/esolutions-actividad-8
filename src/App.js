import { Flex, Progress } from "@chakra-ui/react";
import { useState } from "react";
import { Step } from "./components/Step/Step";

export default function App() {
  const [fill, setFill] = useState(40);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    address: "",
    email: "",
    gender: "",
    password: "",
    repeatPassword: "",
    question1: "",
    question2: "",
    question3: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (fill) {
      case 40:
        setFill(80);
        break;
      case 80:
        setFill(100);
      default:
        break;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Flex height="100vh" paddingX="10%" paddingY="2%" flexDirection="column">
      <Progress
        size="md"
        colorScheme="purple"
        value={fill}
        height="20px"
        minWidth="100%"
        sx={{
          "& > div:first-child": {
            transitionProperty: "width",
          },
        }}
      />
      <Step
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        fill={fill}
      />
    </Flex>
  );
}
