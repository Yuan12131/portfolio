import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/Topbar";

export const metadata: Metadata = {
  title: "LYA's Portfolio",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );
}