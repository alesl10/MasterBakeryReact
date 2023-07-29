import { Link } from "react-router-dom"

const cerrar =document.querySelector('#cerrar')
const nav =document.querySelector('#nav')

const Abrir = (onClick) =>{
    nav.classList.remove('hidden')
    cerrar.classList.remove('hidden')
}

const Cerrar = (onClick) => {
    
    nav.classList.add('hidden')
}


function Filter({ categories, filterCategoriy }) {
    return (
        <>
            <nav className=" relative select-none bg-orange-300/80 lg:flex lg:items-stretch w-full">
                <div className="flex flex-no-shrink items-stretch h-12">
                    <Link to={'/'} className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Inicio</Link>
                    <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
                    
                    <img src="./images/iconos/hombre (1).png" onClick={() =>Abrir()} className="fill-current text-white"  alt=""/>
                        
                    </button>
                </div>
                <div id="nav" class="hidden lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
                    <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
                        {categories.map(category => (
                            <a key={category} onClick={() => filterCategoriy(category)} className=" cursor-pointer flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">{category}</a>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Filter

