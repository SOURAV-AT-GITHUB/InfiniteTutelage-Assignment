import React, { createContext, useState } from "react";
const smallScreenContext = createContext();
function SmallScreenProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <smallScreenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </smallScreenContext.Provider>
  );
}

export { smallScreenContext, SmallScreenProvider };
