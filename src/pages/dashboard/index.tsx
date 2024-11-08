import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DashboardPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard/users");
  }, []);

  return <></>;
};

export default DashboardPage;
