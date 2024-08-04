import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StoreProvider from "./StoreProvider";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import AppFooter from "@/components/AppFooter";
import { Toaster } from "react-hot-toast";
import HeadBanner from "@/components/HeadBanner";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html>
        <head>
        <ThemeModeScript />
        </head>
        <body className="bg-neutral-200 text-neutral-800 dark:bg-neutral-900 dark:text-white">
          {" "}
          <Flowbite>
            <HeadBanner />
            <Header />
            {children}


            <Toaster />
          
              <AppFooter />
            
          </Flowbite>
        </body>
      </html>
    </StoreProvider>
  );
}
