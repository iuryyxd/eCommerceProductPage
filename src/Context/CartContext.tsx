import { createContext, useState } from "react";

interface CartContextType {
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}

const iCartContextState = {
   quantity: 0,
   setQuantity: () => {}
}

export const CartCtx = createContext<CartContextType>(iCartContextState);

interface CartProviderProps {
  children: React.ReactNode;
}

export default function CartContextProvider({ children }: CartProviderProps) {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <CartCtx.Provider value={{ quantity, setQuantity }}>
      {children}
    </CartCtx.Provider>
  );
}
