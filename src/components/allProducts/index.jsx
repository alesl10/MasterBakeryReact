
function AllProducts({ productos }) {

    return (
        <div className=" flex-grow bg-orange-400/50 ">
            <ul className="flex flex-col p-5 ">
                {productos.map(product => (
                    <li className="flex text-xl h-[2em] border-solid border-y items-center justify-between text-white" key={product.index}>
                        <p className="w-1/2">{product.nombre}</p> 
                        <p className="w-1/2">{product.cantidad}    {product.medida}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllProducts