/* eslint-disable @next/next/no-img-element */
import style from "./Logo.module.scss";

const Logo = () => {
  return (
    <img
      src="/assets/images/logos/logo+text.svg"
      className={style.img}
      alt="logo"
    />
  );
};

export default Logo;
