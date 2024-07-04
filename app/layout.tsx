import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home AXIII",
  description:
    "Discover Stylish Spaces, your go-to destination for innovative interior design solutions. From modern minimalism to classic elegance, our expert team transforms spaces to reflect your unique style and personality. Explore our portfolio, get inspired by our blog, and start your journey to a beautiful home today. Visit us for tips, trends, and personalized design services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sen.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
