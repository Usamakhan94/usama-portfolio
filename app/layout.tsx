import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

const outFit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Usama Khan",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outFit.variable} ${outFit.className} antialiased transition-all duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
