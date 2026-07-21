"use client";

import React, { useState } from "react";
import { DISCOVERY, GRINDS } from "../lib/aroast";
import { Price, Bag, SectionHead, IconArrow, IconCheck } from "../components/UI";
import { useAppState } from "../components/AppState";

export default function Discovery() {
  const { addDiscovery } = useAppState();
  const [selectedGrind, setSelectedGrind] = useState(GRINDS[0]);
  const [selectedCoffees, setSelectedCoffees] = useState([]); // Array of selected coffee IDs (max 4)

  const coffees = [
    { id: "nab", name: "ناب" },
    { id: "najva", name: "نجوا" },
    { id: "asil", name: "اصیل" },
    { id: "ojagh", name: "اجاق" },
    { id: "bidari", name: "بیداری" },
    { id: "zolal", name: "زلال" },
  ];

  function toggleCoffee(id) {
    if (selectedCoffees.includes(id)) {
      setSelectedCoffees((prev) => prev.filter((item) => item !== id));
    } else {
      if (selectedCoffees.length < 4) {
        setSelectedCoffees((prev) => [...prev, id]);
      }
    }
  }

  function handleAddToCart() {
    if (selectedCoffees.length !== 4) return;
    addDiscovery({
      grind: selectedGrind,
      box: selectedCoffees,
    });
  }

  return (
    <div className="view-anim" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 22px 100px", direction: "rtl", textAlign: "right" }}>
      <SectionHead
        eyebrow="پک کشف آرُست"
        title="چهار قهوه، یک سفـر"
        sub={DISCOVERY.desc}
      />

      <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "flex-start" }}>
        {/* Selection panel */}
        <div>
          <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "20px" }}>۱. چهار نوع قهوه برای پک خود انتخاب کنید ({Number(selectedCoffees.length).toLocaleString("fa-IR")} از ۴)</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "40px" }} className="r-stack-700">
            {coffees.map((c) => {
              const isSelected = selectedCoffees.includes(c.id);
              return (
                <button
                  key={c.id}
                  onClick={() => toggleCoffee(c.id)}
                  className="glass"
                  style={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "var(--ink)",
                    borderColor: isSelected ? "var(--red)" : "rgba(255, 255, 255, 0.1)",
                    background: isSelected ? "rgba(216, 38, 44, 0.04)" : "rgba(255,255,255,0.02)",
                    cursor: "pointer",
                    textAlign: "right",
                  }}
                >
                  <span style={{ fontSize: "16px", fontWeight: "bold" }}>قهوه {c.name}</span>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      border: "1.5px solid var(--line-strong)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isSelected ? "var(--red)" : "none",
                      color: "#fff",
                    }}
                  >
                    {isSelected && <IconCheck size={14} />}
                  </div>
                </button>
              );
            })}
          </div>

          <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "20px" }}>۲. میزان آسیاب قهوه‌ها را انتخاب کنید</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
            {GRINDS.map((g) => (
              <button
                key={g}
                className={`chip ${selectedGrind === g ? "on" : ""}`}
                onClick={() => setSelectedGrind(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Checkout Box Column */}
        <div className="glass" style={{ padding: "32px", background: "linear-gradient(155deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
            <Bag product={null} w={180} sticker="black" weightLabel="4×50G" floaty />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid var(--line)", paddingBottom: "20px" }}>
            <div>
              <h4 style={{ fontSize: "18px", fontWeight: "800" }}>{DISCOVERY.name}</h4>
              <span style={{ fontSize: "12.5px", color: "var(--muted)", fontFamily: "var(--mono)" }}>{DISCOVERY.nameEn}</span>
            </div>
            <Price value={DISCOVERY.price} size={20} red />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
              <span style={{ color: "var(--muted)" }}>قهوه‌های منتخب</span>
              <span style={{ fontWeight: "700" }}>
                {selectedCoffees.length === 0 ? "هیچ کدام" : selectedCoffees.map((id) => coffees.find((c) => c.id === id)?.name).join(" + ")}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
              <span style={{ color: "var(--muted)" }}>نوع آسیاب</span>
              <span style={{ fontWeight: "700" }}>{selectedGrind}</span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={selectedCoffees.length !== 4}
            className="btn btn-red btn-block btn-lg"
            style={{ display: "inline-flex" }}
          >
            <span>افزودن پک کشف به سبد</span>
            <IconArrow size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
