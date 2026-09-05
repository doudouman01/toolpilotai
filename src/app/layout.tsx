import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "ToolPilotAI — Find the Best AI Tools for Every Task", template: "%s | ToolPilotAI" },
  description: "Honest reviews, comparisons, and guides to help you find the best AI tools for writing, coding, design, and productivity.",
  metadataBase: new URL("https://toolpilotai.co"),
  openGraph: {
    siteName: "ToolPilotAI",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
