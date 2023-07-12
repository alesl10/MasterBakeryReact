
function Header() {

    return (
        <>
            
            <header id="navbar"
                className="invisible w-screen sm:visible h-16 fixed bg-orange-400 bg-opacity-90 flex justify-around px-10 items-center pt-2 z-10 transition-all">

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
