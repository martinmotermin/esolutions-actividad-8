import React from "react";
import { FinalScreen } from "../FinalScreen/FinalScreen";
import { FirstForm } from "../FirstForm/FirstForm";
import { SecondForm } from "../SecondForm/SecondForm";

export const Step = ({ handleSubmit, fill, handleChange }) => {
  let stepContent;

  switch (fill) {
    case 40:
      stepContent = (
        <FirstForm handleSubmit={handleSubmit} handleChange={handleChange} />
      );
      break;
    case 80:
      stepContent = (
        <SecondForm handleSubmit={handleSubmit} handleChange={handleChange} />
      );
      break;
    case 100:
      stepContent = <FinalScreen />;
      break;
    default:
      break;
  }

  return stepContent;
};
