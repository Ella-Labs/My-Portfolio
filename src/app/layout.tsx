import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

// Setting up our Google Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Emmanuel | Full Stack Developer",
  description: "Portfolio of Emmanuel, a Full Stack Developer specializing in backend magic and modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-inter antialiased">
        <Navbar />
        {/* The rest of your website will render inside this children prop! */}
        <main className="pt-24 min-h-screen"> 
          {children}
        </main>
      </body>
    </html>
  );
}