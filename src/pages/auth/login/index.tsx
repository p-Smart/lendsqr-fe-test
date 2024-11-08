import AuthLayout from "@/layouts/Auth";
import { NextPage } from "next";
import style from "./login.module.scss";
import InputField from "@/components/InputField";
import { useState } from "react";
import useSetObjectState from "@/hooks/useSetObjectState";
import Link from "next/link";
import Button from "@/components/Button";

const LoginPage: NextPage = () => {
  const initialLoginData = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialLoginData);
  const setLoginDatum = useSetObjectState(setLoginData);
  return (
    <AuthLayout>
      <div className={style.container}>
        <div>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
        </div>
        <div>
          <InputField
            placeholder="Email"
            value={loginData.email}
            onChange={(val) => setLoginDatum("email", val)}
          />
          <InputField
            placeholder="Password"
            value={loginData.password}
            onChange={(val) => setLoginDatum("password", val)}
            type="password"
          />
          <Link className={style.textBtn} href="/">
            FORGOT PASSWORD?
          </Link>
          <Button as={Link} href="/dashboard">
            log in
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
