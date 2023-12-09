import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export default function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? localStorage : null;
  const defaultProducts = ls ? JSON.parse(ls.getItem("cart")) : [];
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    if (cartProducts.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  function addProduct(productsId) {
    setCartProducts((prev) => [...prev, productsId]);
  }

  function removeProduct(productId) {
    setCartProducts(prev => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value,index) => index !== pos);
      }
      return prev;
    });
  }
  return (
    <CartContext.Provider
      value={{ cartProducts, setCartProducts, addProduct, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}
