"use client";

import React, { useState, useEffect } from "react";
import { useTweaksContext } from "./TweaksState";

export function TweaksPanel() {
  const { tweaks, setTweak } = useTweaksContext();
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ r: 24, b: 24 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, r: 0, b: 0 });

  // Respond to messages/shortcuts for edit mode
  useEffect(() => {
    function onMsg(e) {
      if (e.data?.type === "__activate_edit_mode") setActive(true);
      if (e.data?.type === "__deactivate_edit_mode") setActive(false);
    }
    window.addEventListener("message", onMsg);

    // Add alt+t shortcut to toggle it locally for developers
    function onKeyDown(e) {
      if (e.altKey && e.key === "t") {
        setActive((prev) => !prev);
      }
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("message", onMsg);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  if (!active) return null;

  return (
    <div
      style={{
        position: "fixed",
        right: pos.r,
        bottom: pos.b,
        zIndex: 99999,
        width: 280,
        background: "rgba(12, 11, 15, 0.95)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: "var(--radius)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
        padding: "18px",
        color: "var(--ink)",
        fontFamily: "var(--fa)",
        direction: "rtl",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: "10px",
          marginBottom: "12px",
          cursor: "move",
        }}
        onMouseDown={(e) => {
          setDragging(true);
          setDragStart({
            x: e.clientX,
            y: e.clientY,
            r: pos.r,
            b: pos.b,
          });
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "bold" }}>تنظیمات ظاهری (Tweaks)</span>
        <button
          onClick={() => setActive(false)}
          style={{
            background: "none",
            border: "none",
            color: "var(--muted)",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ×
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* Glass Slider */}
        <div>
          <label style={{ fontSize: "12px", color: "var(--muted)", display: "block", marginBottom: "6px" }}>
            شدت شیشه (گلس): {tweaks.glass}
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={tweaks.glass}
            onChange={(e) => setTweak("glass", parseInt(e.target.value))}
            style={{ width: "100%", accentColor: "var(--red)" }}
          />
        </div>

        {/* Grain Toggle */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "12px", color: "var(--muted)" }}>بافت نویز (گرین)</span>
          <input
            type="checkbox"
            checked={tweaks.grain}
            onChange={(e) => setTweak("grain", e.target.checked)}
            style={{ width: "18px", height: "18px", accentColor: "var(--red)" }}
          />
        </div>

        {/* Motion Toggle */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "12px", color: "var(--muted)" }}>انیمیشن و حرکت</span>
          <input
            type="checkbox"
            checked={tweaks.motion}
            onChange={(e) => setTweak("motion", e.target.checked)}
            style={{ width: "18px", height: "18px", accentColor: "var(--red)" }}
          />
        </div>
      </div>
    </div>
  );
}
