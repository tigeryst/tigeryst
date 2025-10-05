import type { Metadata } from "next";
import { Open_Sans, Lora } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/_components/NavBar";
import Footer from "@/app/_components/Footer";

const primaryFont = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-primary",
});

const secondaryFont = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-secondary",
});

export const metadata: Metadata = {
  title: "Tiger Yotsawat | Portfolio Site",
  description:
    "Welcome to my personal website! I am a computer vision scientist, web developer, and tech entrepreneur based in London. This portfolio site was created to showcase my interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${primaryFont.variable} ${secondaryFont.variable}`}
    >
      <body>
        <header className="sticky top-0 z-50">
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
