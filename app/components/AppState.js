"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
  const [route, setRoute] = useState({ view: "home", productId: null });
  const [cart, setCart] = useState([]);
  const [user, setUserState] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  // Load from LocalStorage (client side only)
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("aroast-cart-v2")) || [];
      setCart(savedCart);
    } catch (e) {}

    try {
      const savedUser = JSON.parse(localStorage.getItem("aroast-lux-user"));
      setUserState(savedUser);
    } catch (e) {}
  }, []);

  // Save Cart to LocalStorage
  useEffect(() => {
    if (cart.length > 0) {
      try {
        localStorage.setItem("aroast-cart-v2", JSON.stringify(cart));
      } catch (e) {}
    }
  }, [cart]);

  function setUser(u) {
    setUserState(u);
    try {
      localStorage.setItem("aroast-lux-user", JSON.stringify(u));
    } catch (e) {}
  }

  function addToCart(product, opts) {
    const key = product.id + "-" + opts.grams + "-" + opts.grind + "-" + (opts.cadence || "");
    setCart((prev) => {
      const ex = prev.find((it) => it.key === key);
      let newCart;
      if (ex) {
        newCart = prev.map((it) => (it.key === key ? { ...it, qty: Math.min(9, it.qty + opts.qty) } : it));
      } else {
        newCart = prev.concat([
          {
            key,
            id: product.id,
            name: product.name,
            category: product.category,
            grams: opts.grams,
            sizeLabel: opts.sizeLabel,
            grind: opts.grind,
            cadence: opts.cadence,
            qty: opts.qty,
            price: opts.price,
          },
        ]);
      }
      try {
        localStorage.setItem("aroast-cart-v2", JSON.stringify(newCart));
      } catch (e) {}
      return newCart;
    });
    setCartOpen(true);
  }

  function addDiscovery(opts) {
    const d = {
      id: "discovery",
      name: "پک کشف",
      pickCount: 4,
      gramsEach: 50,
      price: 2200000,
    };
    const key = "discovery-" + opts.grind + "-" + opts.box.join("_");
    setCart((prev) => {
      const ex = prev.find((it) => it.key === key);
      let newCart;
      if (ex) {
        newCart = prev.map((it) => (it.key === key ? { ...it, qty: Math.min(9, it.qty + 1) } : it));
      } else {
        newCart = prev.concat([
          {
            key,
            id: "discovery",
            name: d.name,
            category: "box",
            box: opts.box,
            grams: d.pickCount * d.gramsEach,
            sizeLabel: Number(d.pickCount).toLocaleString("fa-IR") + "×" + Number(d.gramsEach).toLocaleString("fa-IR") + " گرم",
            grind: opts.grind,
            qty: 1,
            price: d.price,
          },
        ]);
      }
      try {
        localStorage.setItem("aroast-cart-v2", JSON.stringify(newCart));
      } catch (e) {}
      return newCart;
    });
    setCartOpen(true);
  }

  function setQty(key, qty) {
    setCart((prev) => {
      const newCart = prev.map((it) => (it.key === key ? { ...it, qty } : it));
      try {
        localStorage.setItem("aroast-cart-v2", JSON.stringify(newCart));
      } catch (e) {}
      return newCart;
    });
  }

  function removeItem(key) {
    setCart((prev) => {
      const newCart = prev.filter((it) => it.key !== key);
      try {
        localStorage.setItem("aroast-cart-v2", JSON.stringify(newCart));
      } catch (e) {}
      return newCart;
    });
  }

  function clearCart() {
    setCart([]);
    try {
      localStorage.removeItem("aroast-cart-v2");
    } catch (e) {}
  }

  const cartCount = cart.reduce((s, it) => s + it.qty, 0);
  const firstOrder = !(user && user.hasOrdered);

  return (
    <AppStateContext.Provider
      value={{
        cart,
        user,
        setUser,
        cartOpen,
        setCartOpen,
        addToCart,
        addDiscovery,
        setQty,
        removeItem,
        clearCart,
        cartCount,
        firstOrder,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppStateContext);
}
