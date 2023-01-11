import CartContextProvider from "./Context/CartContext";
import Header from "./Layout/Header";
import Main from "./Layout/Main";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Main />
    </CartContextProvider>
  );
}

export default App;
