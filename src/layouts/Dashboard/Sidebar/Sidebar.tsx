import Logo from "@/components/Logo/Logo";
import style from "./Sidebar.module.scss";
import { IoBriefcase } from "react-icons/io5";

const Sidebar = () => {
  const nav = [
    {
      title: "Switch Organization",
      route: "",
      icon: "/assets/icons/dashboard/sidebar/briefcase 1.svg",
    },
    {
      title: "Dashboard",
      route: "",
      icon: "/assets/icons/dashboard/sidebar/home 1.svg",
    },
  ];
  const customers = [
    {
      title: "Users",
      route: "",
      icon: "/assets/icons/dashboard/sidebar/user-friends 1.svg",
    },
    {
      title: "Guarantors",
      route: "",
      icon: "/assets/icons/dashboard/sidebar/users 1.svg",
    },
    {
      title: "Loans",
      route: "",
      icon: "/assets/icons/dashboard/sidebar/user-friends 1.svg",
    },
    {
      title: "Decision Models",
      route: "",
      icon: "/assets/icons/dashboard/sidebar/user-friends 1.svg",
    },
    {
      title: "Savings",
      route: "",
      icon: "/assets/icons/dashboard/sidebar/user-friends 1.svg",
    },
    {
      title: "Loan Requests",
      route: "",
      icon: "/assets/icons/dashboard/sidebar/user-friends 1.svg",
    },
    {
      title: "Whitelist",
      route: "",
      icon: "/assets/icons/dashboard/sidebar/user-friends 1.svg",
    },
    {
      title: "Karma",
      route: "",
      icon: "/assets/icons/dashboard/sidebar/user-friends 1.svg",
    },
  ];

  const businesses = [
    {
      title: "Organisation",
      route: "",
      icon: "/assets/icons/dashboard/sidebar/briefcase 1.svg",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Logo />
      </div>
    </div>
  );
};

export default Sidebar;
