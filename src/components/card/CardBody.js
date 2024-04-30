function CardBody({ product }){

    const name = product.stocked ? (
        product.name
      ) : (
        <span style={{ color: "red" }}>{product.name}</span>
      );

      return (
        <div className="grid grid-cols-12 gap-4 border ring-slate-400 p-4 rounded-md">
          <div className=" col-span-8 ">{name}</div>
          <div className="col-span-4">{product.price}</div>
        </div>
      );
}


export {CardBody}