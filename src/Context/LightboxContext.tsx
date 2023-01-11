import { createContext, useState } from "react";

interface LightboxContextType {
    openLightbox: boolean,
    setOpenLightbox: React.Dispatch<React.SetStateAction<boolean>>
}

const iLightboxContextState = {
    openLightbox: false,
    setOpenLightbox: () => {}
}

export const LightboxCtx = createContext<LightboxContextType>(iLightboxContextState);

interface LightboxProviderProps {
  children: React.ReactNode;
}

export default function LightboxContextProvider({ children }: LightboxProviderProps) {
  const [openLightbox, setOpenLightbox] = useState<boolean>(false)

  return (
    <LightboxCtx.Provider value={{ openLightbox, setOpenLightbox }}>
      {children}
    </LightboxCtx.Provider>
  );
}
