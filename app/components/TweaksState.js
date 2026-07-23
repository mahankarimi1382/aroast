"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const TweaksContext = createContext();

const TWEAK_DEFAULTS = {
  glass: 8,
  motion: true,
  grain: true,
};

export function TweaksProvider({ children }) {
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);

  function setTweak(key, value) {
    setTweaks((prev) => ({ ...prev, [key]: value }));
  }

  // Apply tweaks dynamically to standard CSS variables and body classes
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--glass-b", Math.round(8 + tweaks.glass * 2.4) + "px");
    document.documentElement.classList.toggle("no-motion", !tweaks.motion);
    document.documentElement.classList.toggle("no-grain", !tweaks.grain);
  }, [tweaks]);

  return (
    <TweaksContext.Provider value={{ tweaks, setTweak }}>
      {children}
    </TweaksContext.Provider>
  );
}

export function useTweaksContext() {
  return useContext(TweaksContext);
}
