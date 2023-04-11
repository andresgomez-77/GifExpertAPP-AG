import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Sword Art Online"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // categories.push("Valorant"); no es la solucion
    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, "Valorant"]);
  };
  return (
    <>
      {/* TITULO */}
      <h1>GifExpertApp</h1>
      {/* INPUT */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* LISTADO DE ITEMS */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* GIF ITEM */}
    </>
  );
};
