"use client";

import React, { useState } from "react";
import { BREW_GUIDES } from "../lib/aroast";
import { SectionHead, StatRow } from "../components/UI";

export default function Learn() {
  const [activeGuide, setActiveGuide] = useState(BREW_GUIDES[0]);

  return (
    <div className="view-anim" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 22px 100px", direction: "rtl", textAlign: "right" }}>
      <SectionHead
        eyebrow="راهنمای جامع دم‌آوری خانگی"
        title="کتابچه راهنما و دستورالعمل‌های آرُست"
        sub="هر روش دم‌آوری یک علم است. با نسبت‌ها، درجه آسیاب و دماهای بهینه آشنا شوید."
      />

      {/* Guide selector tabs */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "48px", overflowX: "auto", paddingBottom: "10px" }}>
        {BREW_GUIDES.map((g) => (
          <button
            key={g.id}
            className={`chip ${activeGuide.id === g.id ? "on" : ""}`}
            onClick={() => setActiveGuide(g)}
            style={{ whiteSpace: "nowrap" }}
          >
            {g.title} ({g.en})
          </button>
        ))}
      </div>

      {/* Selected Guide Details */}
      <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "flex-start" }}>
        {/* Guide Instructions */}
        <div className="glass" style={{ padding: "40px", background: "linear-gradient(155deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "8px" }}>مراحل دم‌آوری {activeGuide.title}</h3>
          <p style={{ fontSize: "14.5px", color: "var(--muted)", marginBottom: "32px" }}>{activeGuide.tip}</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {activeGuide.steps.map((step, idx) => (
              <div key={idx} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <span
                  style={{
                    background: "rgba(216,38,44,0.1)",
                    color: "var(--red)",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontFamily: "var(--mono)",
                    flexShrink: 0,
                  }}
                >
                  {Number(idx + 1).toLocaleString("fa-IR")}
                </span>
                <p style={{ fontSize: "15.5px", color: "var(--ink)", lineHeight: "1.8", paddingTop: "2px" }}>{step}</p>
              </div>
            ))}
          </div>

          <div
            className="glass-flat"
            style={{
              marginTop: "40px",
              padding: "20px",
              borderRight: "4px solid var(--red)",
              background: "rgba(216, 38, 44, 0.03)",
              fontSize: "14.5px",
              lineHeight: "1.8",
              color: "var(--muted)",
            }}
          >
            <strong>نکته کلیدی:</strong> {activeGuide.highlight}
          </div>
        </div>

        {/* Recipe and Stats Card */}
        <div className="glass" style={{ padding: "32px", background: "rgba(12,11,15,0.6)" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "28px" }}>دستورالعمل پایه (Recipe)</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--line)", paddingBottom: "12px" }}>
              <span style={{ color: "var(--muted)" }}>میزان قهوه (Dose)</span>
              <strong style={{ color: "var(--ink)" }}>{activeGuide.dose}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--line)", paddingBottom: "12px" }}>
              <span style={{ color: "var(--muted)" }}>نسبت آب به قهوه (Ratio)</span>
              <strong style={{ color: "var(--ink)", fontFamily: "var(--mono)" }}>{activeGuide.ratio}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--line)", paddingBottom: "12px" }}>
              <span style={{ color: "var(--muted)" }}>درجه آسیاب</span>
              <strong style={{ color: "var(--ink)" }}>{activeGuide.grind}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--line)", paddingBottom: "12px" }}>
              <span style={{ color: "var(--muted)" }}>دمای آب پیشنهاد شده</span>
              <strong style={{ color: "var(--ink)" }}>{activeGuide.temp}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "4px" }}>
              <span style={{ color: "var(--muted)" }}>زمان بهینه دم‌آوری</span>
              <strong style={{ color: "var(--ink)" }}>{activeGuide.time}</strong>
            </div>
          </div>

          <h3 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "16px" }}>قهوه‌های مناسب این روش</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {activeGuide.suitable.map((s) => (
              <span key={s} className="chip on" style={{ fontSize: "13px" }}>
                قهوه {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
