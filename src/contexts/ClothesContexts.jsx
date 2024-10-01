// import React, { createContext, useState, useEffect } from "react";
// import { fetchPremiumClothes } from "..//services/api";

// export const ClothesContext = createContext();

// export const ClothesProvider = ({ children }) => {
//   const [clothes, setClothes] = useState([]);

//   useEffect(() => {
//     const getClothes = async () => {
//       const clothesData = await fetchPremiumClothes();
//       setClothes(clothesData);
//     };
//     getClothes();
//   }, []);

//   return (
//     <ClothesContext.Provider value={{ clothes }}>
//       {children}
//     </ClothesContext.Provider>
//   );
// };
