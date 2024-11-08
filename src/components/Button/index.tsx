import React, { ElementType, PropsWithChildren } from "react";
import style from "./Button.module.scss";

interface IButtonBase {
  fullWidth?: boolean;
}

type ButtonProps<T extends ElementType> = PropsWithChildren<
  IButtonBase & { as?: T } & React.ComponentPropsWithoutRef<T>
>;

const Button = <T extends ElementType = "button">({
  as,
  fullWidth,
  children,
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";
  return (
    <Component
      className={`${style.button} ${fullWidth ? style.fullWidth : ""}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
