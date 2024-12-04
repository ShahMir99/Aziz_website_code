import { Outlet } from "react-router-dom";
import { ApplicationLayout } from "@/Layout/application-layout";

export default function RootLayout() {
  return (
    <ApplicationLayout >
      <Outlet />
    </ApplicationLayout>
  );
}
