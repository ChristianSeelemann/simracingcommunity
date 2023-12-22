import type { Metadata } from "next";
import "./ui/globals.css";
import DefaultHeader from "./ui/header/defaultHeader";
import DefaultSidebar from "./ui/sidebar/defaultSidebar";

export const metadata: Metadata = {
  title: "Simracing Community",
  description: "Just for Fun Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <DefaultHeader />
        <DefaultSidebar />
        {children}
      </body>
    </html>
  );
}
