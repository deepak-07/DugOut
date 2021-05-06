import { createContext, useContext, useState } from "react";

export const LocalisationContext = createContext();
const language = {
  hindi: {
    product: "उत्पाद",
    cart: "झोला",
    addToCart: "झोला में डाले ",
    checkout: "पैसे भरे",
    cartHeader: "झोला मैं उत्पाद- ",
    mode: "मोड ",
    eCommerce: "ई-कॉमर्स"
  },
  english: {
    product: "Product",
    cart: "Cart",
    addToCart: "Add to Cart",
    checkout: "Checkout",
    cartHeader: "Items in Cart- ",
    mode: "Mode",
    eCommerce: "eCommerce"
  }
};
export const LocalisationProvider = ({ children }) => {
  const [lang, setLang] = useState("english");

  return (
    <LocalisationContext.Provider value={{ language, lang, setLang }}>
      {children}
    </LocalisationContext.Provider>
  );
};

export const useLang = () => useContext(LocalisationContext);
