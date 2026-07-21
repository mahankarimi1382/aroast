"use client";

import React from "react";
import { useAppState } from "./AppState";
import { CartDrawer } from "./CartDrawer";

export function CartDrawerContainer() {
  const { cartOpen, setCartOpen } = useAppState();
  return <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />;
}
