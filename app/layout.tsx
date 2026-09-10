import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ademola Adedoyin | Software Engineer",
  description:
    "Backend-focused software engineer building scalable APIs, distributed systems, fintech platforms, and cloud-native applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
