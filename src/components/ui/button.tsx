import React from "react";
import Classes from "./button.module.css";

interface IButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

function Button(props: IButtonProps) {
  const { children, onClick, className, ...rest } = props;
  return (
    <button {...rest} className={`${Classes.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
