
function Servicios() {

    return (
        <>
            <section id="servicios" className="pt-6">
                <h2
                    className="decoration-orange-400 text-white text-[2rem] underline mb-16 sm:mb-0 sm:no-underline sm:text-7xl text-center ">
                    Nuestros servicios</h2>

                <div className="flex flex-col sm:flex-row sm:justify-center items-center sm:gap-10 sm:m-10">
                    <div className="flex gap-5 sm:gap-0 sm:flex-col items-center">
                        <img src="./images/iconos/camion (1).png" className=" w-20 xl:w-36" alt=""/>
                            <p className="text-center text-orange-400 font-semibold  sm:text-white sm:text-2xl">Envios a todo el pais</p>
                    </div>
                    <div className="sm:hidden flex gap-5 sm:gap-0 sm:flex-col  items-center">
                        <p className="text-center text-orange-400 font-semibold sm:text-white sm:text-2xl">Atencion personalizada</p>
                        <img src="./images/iconos/hombre (1).png" className=" w-20 xl:w-36" alt=""/>
                    </div>
                    <div className="hidden sm:visible sm:flex gap-5 sm:gap-0 sm:flex-col  items-center">
                        <img src="./images/iconos/hombre (1).png" className=" w-20 xl:w-36" alt=""/>
                            <p className="text-center text-orange-400 font-semibold sm:text-white sm:text-2xl">Atencion personalizada</p>
                    </div>
                    <div className="flex gap-5 sm:gap-0 sm:flex-col  items-center">
                        <img src="./images/iconos/favoritos (1).png" className=" w-20 xl:w-36" alt=""/>
                            <p className="text-center text-orange-400 font-semibold sm:text-white sm:text-2xl">Productos de primera calidad
                            </p>
                    </div>
                    <div className="sm:hidden flex gap-5 sm:gap-0 sm:flex-col  items-center">
                        <p className="text-center text-orange-400 font-semibold sm:text-white sm:text-2xl">Importadores directos</p>
                        <img src="./images/iconos/globo (1).png" className=" w-20 xl:w-36" alt=""/>
                    </div>
                    <div className="hidden sm:visible sm:flex gap-5 sm:gap-0 sm:flex-col  items-center">
                        <img src="./images/iconos/globo (1).png" className=" w-20 xl:w-36" alt=""/>
                            <p className="text-center text-orange-400 font-semibold sm:text-white sm:text-2xl">Importadores directos</p>
                    </div>
                </div>
            </section>

            <div class="flex justify-center my-10 sm:my-20">
                <hr className="w-48 border-2 sm:border-4"/>
            </div>

        </>
    )
}

export default Servicios
