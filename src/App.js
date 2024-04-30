import { FilterableProductTable } from "./components/Page";
import "./assets/main.css";
import { Card } from "./components/card/Card";
import { FilterableProductCard } from "./components/PageCard";

const PRODUCTS = [
  { category: "Frutas", price: "$1", stocked: true, name: "Manzana" },
  { category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón" },
  { category: "Frutas", price: "$2", stocked: false, name: "Maracuyá" },
  { category: "Verduras", price: "$2", stocked: true, name: "Espinaca" },
  { category: "Verduras", price: "$4", stocked: false, name: "Calabaza" },
  { category: "Verduras", price: "$1", stocked: true, name: "Guisantes" },
];

export default function App() {
  return (
    <div className="container mx-auto px-8">
      <h1 className="text-2xl font-bold underline text-red-600">
        Hello world!
      </h1>
      <FilterableProductTable products={PRODUCTS} />
      <div className="mt-10">
        <FilterableProductCard products={PRODUCTS}></FilterableProductCard>
      </div>
    </div>
  );
}
