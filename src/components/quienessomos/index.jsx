
function QuienesSomos() {

    return (
        <>

            <section id="quienesSomos" className=" relative sm:pt-20 sm:h-screen text-center text-white sm:text-2xl">
                <p className="text-3xl sm:text-6xl font-semibold sm:mb-10 underline mb-6 sm:no-underline">¿Quienes somos?</p>
                <div className="flex flex-grow items-center bg-orange-300/90 ">

                    <img className="w-2/4 sm:w-1/4" src="./images/pngwing.com.png" alt="chef image"/>

                        <div
                            className=" bg-orange-300/90 h-[21em] w-2/3  text-center  border-solid border-2 sm:border-4 border-white flex items-center rounded-md ">
                            <p className=" right-0 inline-block sm:text-4xl">
                                Somos una empresa con 15 años de experiencia, especializados en la distribucion de productos
                                alimenticios y
                                abasteciendo al rubro gastronomico y pastelero en todo el pais, con insumos de primera
                                calidad.
                            </p>
                        </div>
                </div>
            </section>

            <div className="flex justify-center my-10 sm:my-20">
                <hr className="w-48 border-2 sm:border-4"/>
            </div>
        </>
    )
}

export default QuienesSomos
