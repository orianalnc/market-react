import { useState } from "react";
import { SearchBar } from "./Search";
import { ProductTable } from "./table/Table";
import { Card } from "./card/Card";

function FilterableProductCard({ products }) {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);
  
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
        <Card
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }

  export {FilterableProductCard}