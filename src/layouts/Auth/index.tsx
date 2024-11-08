/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/Logo";
import style from "./Auth.module.scss";
import { FC, PropsWithChildren, useEffect } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    document.querySelector("html").classList.add("auth");
  }, []);

  return (
    <div className={style.container}>
      <Logo />

      <div className={style.flexbox}>
        <div>
          <img
            src="/assets/images/auth/pablo-sign-in 1.svg"
            alt="auth-illustration"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
