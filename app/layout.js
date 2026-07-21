"use client";

import React from "react";
import { AppStateProvider } from "./components/AppState";
import { TweaksProvider } from "./components/TweaksState";
import { Header, Footer } from "./components/HeaderFooter";
import { CartDrawerContainer } from "./components/CartDrawerContainer";
import { TweaksPanel } from "./components/TweaksPanel";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <title>آرُست — برشته‌کاری قهوه | رُست تازه، ارسال سریع</title>
        <meta name="description" content="آرُست یک برشته‌کاری قهوه کوچک در تهران است. پنج قهوه امضایی با رُست هفتگی، آسیاب دلخواه و تحویل فوری در تهران. قهوه تازه، مستقیم از برشته‌کاری." />
        <meta name="keywords" content="قهوه, برشته‌کاری قهوه, قهوه تازه, آرُست, دانه قهوه, اسپرسو, موکاپات, قهوه ایرانی, خرید قهوه آنلاین" />
        <link rel="canonical" href="https://a-roast.com/" />
      </head>
      <body>
        <TweaksProvider>
          <AppStateProvider>
            <div className="ambient" />
            <div className="noise" />

            <Header />
            <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", paddingTop: "110px" }}>
              {children}
            </div>
            <Footer />

            <CartDrawerContainer />
            <TweaksPanel />
          </AppStateProvider>
        </TweaksProvider>
      </body>
    </html>
  );
}
