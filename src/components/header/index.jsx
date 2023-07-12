
function Header() {

    return (
        <>
            <div className="fixed w-screen h-screen bg-fixed bg-cover -z-10"
                style={{ backgroundImage: "url(./images/premezcla-para-celiacos.webp)" }}>
                <div className="absolute w-screen h-screen bg-black opacity-70">
                </div>
            </div>

            <div id="logo" class=" sm:fixed z-30 mx-2 sm:mx-10">
                <a className="text-white font-bold text-8xl" href="./index.html">
                    <img className="w-[5rem] sm:w-[6rem] xl:w-[8rem]" src="./images/logofinal.png" alt="" /></a>
            </div>
            <header id="navbar"
                className="invisible w-screen sm:visible lg:h-10 xl:h-16 fixed bg-orange-400 bg-opacity-90 flex justify-around px-10 items-center pt-2 z-10 transition-all">

                <nav>
                    <ul className="flex gap-4">
                        <li className=" text-white text-xl hover:text-gray-800 font-bold hover:opacity-70 transition ">
                            <a className="p-2" href="#Inicio">Inicio</a>
                        </li>
                        <li className=" text-white text-xl hover:text-gray-800 font-bold hover:opacity-70 transition ">
                            <a className="p-2" href="#quienesSomos">¿Quienes somos?</a>
                        </li>
                        <li className=" text-white text-xl hover:text-gray-800 font-bold hover:opacity-70 transition ">
                            <a className="p-2" href="#productos">Productos</a>
                        </li>
                        <li className=" text-white text-xl hover:text-gray-800 font-bold hover:opacity-70 transition ">
                            <a className="p-2" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header
