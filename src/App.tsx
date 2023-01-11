import { useState } from "react";
import Lightbox from "./Components/Lightbox";
import CartContextProvider from "./Context/CartContext";
import LightboxContextProvider from "./Context/LightboxContext";
import Header from "./Layout/Header";
import Main from "./Layout/Main";

function App() {
  return (
    <CartContextProvider>
      <LightboxContextProvider>
        <Lightbox />
        <Header />
        <Main />
      </LightboxContextProvider>
    </CartContextProvider>
  );
}

export default App;
