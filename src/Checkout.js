import { useLang } from "./localiseContext";
import { useCart } from "./context";
import { useTheme } from "./themeContext";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const { theme } = useTheme();
  const inputRef = useRef();
  const { language, lang } = useLang();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const submitCardHandler = () => {
    const cardDetails = inputRef.current.value;
    console.log({ cardDetails });
  };
  return (
    <>
      <label>
        {lang === "english" ? "Credit Card No." : "क्रेडिट कार्ड संख्या  "}
        <input ref={inputRef} type="number" />
      </label>
      <button onClick={submitCardHandler}>DONE</button>
    </>
  );
};
