import React from "react";

export const AppButton = ({ buttonText, buttonType = "button", isDisabled = false, buttonClick }) => {
  return (
    <button
      type={buttonType}
      disabled={isDisabled}
      onClick={buttonClick}
    >
      {buttonText}
    </button>
  );
};
