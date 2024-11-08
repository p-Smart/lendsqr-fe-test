import style from "./Dashboard.module.scss";
import { FC, PropsWithChildren } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

interface IDashboardLayout {}

const DashboardLayout: FC<IDashboardLayout & PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className={style.container}>
      <Topbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
