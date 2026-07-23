"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ARLogo, IconBag } from "./UI";
import { useAppState } from "./AppState";

export function Header() {
  const { cartCount, setCartOpen } = useAppState();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "/shop", label: "قهوه" },
    { href: "/learn", label: "آموزش" },
    { href: "/story", label: "داستان ما" },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 60,
          transition: "all 0.4s ease",
          padding: scrolled ? "10px 0" : "18px 0",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 22px" }}>
          <div
            className="glass"
            style={{
              borderRadius: 999,
              padding: "0 14px 0 22px",
              height: 60,
              display: "flex",
              alignItems: "center",
              gap: 30,
              background: scrolled
                ? "linear-gradient(155deg, rgba(255,255,255,0.1), rgba(255,255,255,0.025))"
                : "linear-gradient(155deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))",
            }}
          >
            {/* Logo + Brand */}
            <Link
              href="/"
              style={{
                background: "none",
                border: "none",
                display: "flex",
                alignItems: "center",
                gap: 11,
                color: "var(--ink)",
                padding: 0,
              }}
            >
              <ARLogo height={32} />
              <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: "0.02em" }}>آرُست</span>
            </Link>

            {/* Navigation Links (Desktop) */}
            <nav style={{ display: "flex", gap: 4, flex: 1, justifyContent: "center" }} className="hide-mobile">
              {links.map((l) => {
                const isActive = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={{
                      padding: "8px 16px",
                      fontSize: "14.5px",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "var(--ink)" : "var(--muted)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions (Cart + Mobile menu button) */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button
                onClick={() => setCartOpen(true)}
                className="btn btn-ghost"
                style={{
                  height: 42,
                  width: 42,
                  padding: 0,
                  borderRadius: "50%",
                  border: "1px solid var(--line)",
                  background: "rgba(255,255,255,0.02)",
                  color: "var(--ink)",
                }}
              >
                <div style={{ position: "relative" }}>
                  <IconBag size={18} />
                  {cartCount > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: -6,
                        right: -6,
                        background: "var(--red)",
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: "bold",
                        borderRadius: "50%",
                        width: 17,
                        height: 17,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--mono)",
                        border: "1.5px solid var(--bg2)",
                      }}
                    >
                      {Number(cartCount).toLocaleString("fa-IR")}
                    </span>
                  )}
                </div>
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="mob-show"
                style={{
                  height: 42,
                  width: 42,
                  background: "none",
                  border: "1px solid var(--line)",
                  borderRadius: "50%",
                  color: "var(--ink)",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8,7,10,0.98)",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
            padding: 24,
            direction: "rtl",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "var(--ink)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{ fontSize: 20, color: "var(--muted)" }}
          >
            صفحه اصلی
          </Link>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        background: "linear-gradient(180deg, transparent, #0C0B0F)",
        padding: "80px 22px 50px",
        marginTop: "120px",
        position: "relative",
        zIndex: 10,
        direction: "rtl",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="r-footer" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 64 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
              <ARLogo height={32} />
              <span style={{ fontWeight: 800, fontSize: 20 }}>آرُست</span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.85, maxWidth: 360 }}>
              برشته‌کاری آرُست در تهران متعهد به برشته‌کاری دقیق، تازه و علمی دانه قهوه است. تحویل فوری در تهران برای تضمین نهایت تازگی.
            </p>
          </div>
          <div>
            <h4 style={{ color: "var(--ink)", fontSize: 14, fontWeight: 700, marginBottom: 20, letterSpacing: "0.02em" }}>بخش‌های سایت</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link href="/shop" style={{ color: "var(--muted)", fontSize: 14, transition: "color 0.2s" }} className="hover-white">
                خرید قهوه
              </Link>
              <Link href="/learn" style={{ color: "var(--muted)", fontSize: 14, transition: "color 0.2s" }} className="hover-white">
                راهنمای دم‌آوری
              </Link>
              <Link href="/story" style={{ color: "var(--muted)", fontSize: 14, transition: "color 0.2s" }} className="hover-white">
                داستان ما
              </Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: "var(--ink)", fontSize: 14, fontWeight: 700, marginBottom: 20, letterSpacing: "0.02em" }}>تماس با ما</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, color: "var(--muted)", fontSize: 14 }}>
              <span>تلفن تماس: +۹۸۹۳۷۶۴۶۲۹۵۵</span>
              <span>پشتیبانی واتس‌اپ و تلگرام</span>
              <span>تهران، کارگاه برشته‌کاری آرُست</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--line)", marginTop: 60, paddingTop: 30, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, direction: "rtl" }}>
          <span style={{ color: "var(--faint)", fontSize: 13, fontFamily: "var(--mono)" }}>© A-ROAST COFFEE ROASTERS. ALL RIGHTS RESERVED.</span>
          <span style={{ color: "var(--faint)", fontSize: 13 }}>توسعه داده شده با عشق و کافئین</span>
        </div>
      </div>
    </footer>
  );
}
