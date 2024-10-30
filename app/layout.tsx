import "swiper/css";
import "@/styles/globals.css";
import "swiper/css/navigation";
import "@/styles/swiperCustom.css"

import { Metadata, Viewport } from "next";
import clsx from "clsx";
import {getLocale, getMessages} from 'next-intl/server';

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <Providers messages={messages} locale={locale} themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="pt-16 px-16 flex-grow">{children}</main>
            {/* <footer className="w-full flex items-center justify-center py-3">
              <span className="text-default-600">Powered by</span>
              <p className="text-primary">NextUI</p>
            </footer> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
