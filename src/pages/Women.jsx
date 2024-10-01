import React, { useContext } from "react";
import { ClothesContext } from "../contexts/ClothesContexts";

const Women = () => {
  const { clothes } = useContext(ClothesContext);

  const womenClothes = clothes.filter((item) => item.category === "women");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Women's Clothing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {womenClothes.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            <img src={item.image} alt={item.name} className="mb-4" />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>{item.brand}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
