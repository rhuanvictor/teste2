
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import Head from "next/head";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import  Navbar  from "@/components/navbar/navbar";
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: { icon: "/favicon.ico" },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx("min-h-screen bg-background font-sans antialiased ", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar shouldHideOnScroll />
          <WhatsAppButton />
          <div className="relative flex flex-col gap-4 w-full items-center justify-between max-w-[1324px] mx-auto">
            <main className="container mx-auto pt-16 px-6 flex-grow">{children}</main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link isExternal className="flex items-center gap-1 text-current" href="https://easyui.pro" title="easyui.pro homepage">
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Easy UI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}

