import { CardBody } from "./CardBody";
import { CardCategory } from "./CardCategory";

function Card({ products,  filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }


    if (product.category !== lastCategory) {
      rows.push(
        <CardCategory
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<CardBody product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return <div class="pt-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-6"> Frutas y Verduras</h2>
    <div className="grid grid-cols-4 gap-4" >{rows} </div>
  </div>;
}

export { Card };
