import React, { FunctionComponent } from "react";

type ButtonProps = {
  text: string;
  onClick: Function;
};

const Button: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  return (
    <>
      <button className="button" onClick={() => onClick()}>
        {text}
      </button>
    </>
  );
};

export default Button;
