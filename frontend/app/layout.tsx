import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EventFlow",
  description: "Post and manage event requirements easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-900 bg-gradient-to-br from-white to-blue-50">
        {children}
      </body>
    </html>
  );
}