import { FC, PropsWithChildren } from "react";
import style from "./Button.module.scss";

interface IButton {
  fullWidth?: string;
}

const Button: FC<PropsWithChildren & IButton> = ({ fullWidth, children }) => {
  return (
    <button className={`${style.button} ${fullWidth ? " full-width" : ""}`}>
      {children}
    </button>
  );
};

export default Button;
