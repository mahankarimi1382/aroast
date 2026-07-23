"use client";

import React, { useEffect } from "react";
import Image from "next/image";

export function useReveal() {
  useEffect(() => {
    let alive = true;
    const revealVisible = () => {
      if (!alive) return;
      const items = document.querySelectorAll(".reveal:not(.in)");
      items.forEach((it) => {
        const r = it.getBoundingClientRect();
        if (r.top < window.innerHeight - 20) {
          it.classList.add("in");
        }
      });
    };
    window.addEventListener("scroll", revealVisible);
    window.addEventListener("resize", revealVisible);
    // run once initially
    setTimeout(revealVisible, 100);
    return () => {
      alive = false;
      window.removeEventListener("scroll", revealVisible);
      window.removeEventListener("resize", revealVisible);
    };
  }, []);
}

export function Reveal({ children, delay = 0, style, as = "div", className = "" }) {
  useReveal();
  const Tag = as;
  return (
    <Tag
      className={`reveal ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export function ARLogo({ red = false, height = 34 }) {
  const src = red ? "/assets/logo-red.png" : "/assets/logo-white.png";
  return (
    <div style={{ height: `${height}px`, width: "auto", display: "inline-block", verticalAlign: "middle", position: "relative" }}>
      <Image
        src={src}
        alt="آرُست"
        height={height}
        width={height * 1.5} // Estimate width based on logo proportions
        style={{
          height: "100%",
          width: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export function Price({ value, size = 16, gold = false, red = false, strike = false }) {
  const faVal = Number(value).toLocaleString("fa-IR");
  return (
    <span
      className={gold ? "gold-text" : ""}
      style={{
        fontFamily: "var(--mono)",
        fontSize: `${size}px`,
        fontWeight: "bold",
        direction: "ltr",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        color: strike ? "var(--faint)" : red ? "var(--red)" : "inherit",
        textDecoration: strike ? "line-through" : "none",
      }}
    >
      <span>تومان</span>
      <span>{faVal}</span>
    </span>
  );
}

export function Bag({ product, w = 150, sticker = "auto", floaty = false, weightLabel = "250G" }) {
  let stickerSrc;
  const stickerRedSrc = "/assets/sticker-red.png";
  const stickerBlackSrc = "/assets/sticker-black.png";
  if (sticker === "auto") {
    stickerSrc = product && product.category === "origin" ? stickerBlackSrc : stickerRedSrc;
  } else {
    stickerSrc = sticker === "black" ? stickerBlackSrc : stickerRedSrc;
  }

  const h = w * 1.52;
  const rad = Math.round(w * 0.1);

  return (
    <div
      className={floaty ? "floaty" : ""}
      style={{
        width: `${w}px`,
        height: `${h}px`,
        position: "relative",
        borderRadius: `${rad}px`,
        background: "linear-gradient(155deg, #161519, #0C0B0F)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 15px 35px -10px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.1)",
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      {/* Glossy sheen */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(125deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 80%, rgba(255,255,255,0.03) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Top seal band */}
      <div
        style={{
          height: "10%",
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "80%", height: "1px", background: "rgba(255,255,255,0.1)", borderBottom: "1px dashed rgba(255,255,255,0.15)" }} />
      </div>

      {/* Bag brand badge */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div style={{ color: "rgba(255,255,255,0.1)", fontSize: `${w * 0.1}px`, fontFamily: "var(--mono)", letterSpacing: "0.15em", fontWeight: "bold" }}>
          A-ROAST
        </div>
      </div>

      {/* Sticker foil ring */}
      <div
        style={{
          position: "absolute",
          width: `${w * 0.62}px`,
          height: `${w * 0.62}px`,
          left: "50%",
          top: "37%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(216,38,44,0.15), transparent 70%)",
        }}
      />

      <div style={{ position: "absolute", width: w * 0.56, height: w * 0.56, left: "50%", top: "37%", transform: "translate(-50%, -50%)", filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.5))" }}>
        <Image
          src={stickerSrc}
          alt=""
          fill
          sizes={`${w * 0.56}px`}
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      {/* Weight indicator at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "4px",
          padding: "2px 8px",
          background: "rgba(0,0,0,0.3)",
          fontSize: `${w * 0.07}px`,
          fontFamily: "var(--mono)",
          color: "rgba(255,255,255,0.4)",
          whiteSpace: "nowrap",
        }}
      >
        {weightLabel}
      </div>
    </div>
  );
}

export function StatRow({ label, en, value, max = 5, tone = "ink" }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "4px 0" }}>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontSize: "14px", fontWeight: "600", color: `var(--${tone})` }}>{label}</div>
        <div style={{ fontSize: "10px", color: "var(--faint)", fontFamily: "var(--mono)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "-3px" }}>
          {en}
        </div>
      </div>
      <div className="seg-row" style={{ flex: 1, maxWidth: "160px" }}>
        {Array.from({ length: max }).map((_, i) => (
          <div key={i} className={`seg ${i < value ? "on-red" : ""}`} />
        ))}
      </div>
    </div>
  );
}

export function SectionHead({ eyebrow, title, sub, center, style }) {
  return (
    <div style={{ textAlign: center ? "center" : "right", marginBottom: "42px", ...style }}>
      {eyebrow && <div className="eyebrow" style={{ marginBottom: "8px" }}>{eyebrow}</div>}
      <h2 style={{ fontSize: "30px", fontWeight: "800", color: "var(--ink)", lineHeight: "1.3" }}>{title}</h2>
      {sub && <p style={{ fontSize: "16px", color: "var(--muted)", marginTop: "8px", maxWidth: "560px", marginRight: center ? "auto" : "0", marginLeft: center ? "auto" : "0" }}>{sub}</p>}
    </div>
  );
}

export function IconBag({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export function IconArrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

export function IconX({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function IconCheck({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function IconLeaf({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
      <path d="M9 22v-4" />
    </svg>
  );
}

export function IconFlame({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

export function IconDrop({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

export function IconClock({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function IconTruck({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

export function IconGift({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

export function IconShield({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function IconCompass({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

export function IconBook({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

export function BWImage({ id, label, style }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "#121115",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        filter: "grayscale(1) contrast(1.06)",
        minHeight: "180px",
        ...style,
      }}
    >
      <div style={{ color: "var(--muted)", fontSize: "14px", fontFamily: "var(--fa)", padding: "20px", textAlign: "center" }}>
        {label}
      </div>
    </div>
  );
}
