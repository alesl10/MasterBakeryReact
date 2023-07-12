import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Productos() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <section id="productos" >
                <div className="bg-orange-400/40 p-4 flex flex-col gap-5">
                    <h2 className="text-white sm:text-7xl sm:m-4 text-center "> Nuestros productos destacados</h2>

                    <Carousel responsive={responsive}>
                        <div className=' flex flex-col justify-center items-center text-white text-xl font-medium'>
                            <h4>Titulo producto</h4>
                            <img src="../../../public/images/productos/Muffins chocolate.jpg" className=' w-[20rem]' alt="imagen producto" />
                            <p>Descripcion producto</p>
                            <p>Stock permanente</p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-white text-xl font-medium'>
                            <h4>Titulo producto</h4>
                            <img src="../../../public/images/productos/Pan de queso.jpg" className=' w-[20rem]' alt="imagen producto" />
                            <p>Descripcion producto</p>
                            <p>Stock permanente</p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-white text-xl font-medium'>
                            <h4>Titulo producto</h4>
                            <img src="../../../public/images/productos/Polvo para Hornear.jpg" className=' w-[20rem]' alt="imagen producto" />
                            <p>Descripcion producto</p>
                            <p>Stock permanente</p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-white text-xl font-medium'>
                            <h4>Titulo producto</h4>
                            <img src="../../../public/images/productos/Muffins de vainilla.jpg" className=' w-[20rem]' alt="imagen producto" />
                            <p>Descripcion producto</p>
                            <p>Stock permanente</p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-white text-xl font-medium'>
                            <h4>Titulo producto</h4>
                            <img src="../../../public/images/productos/Muffins de vainilla.jpg" className=' w-[20rem]' alt="" />
                            <p>Descripcion producto</p>
                            <p>Stock permanente</p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-white text-xl font-medium'>
                            <h4>Titulo producto</h4>
                            <img src="../../../public/images/productos/Muffins de vainilla.jpg" className=' w-[20rem]' alt="" />
                            <p>Descripcion producto</p>
                            <p>Stock permanente</p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-white text-xl font-medium'>
                            <h4>Titulo producto</h4>
                            <img src="../../../public/images/productos/Muffins de vainilla.jpg" className=' w-[20rem]' alt="" />
                            <p>Descripcion producto</p>
                            <p>Stock permanente</p>
                        </div>

                    </Carousel>;

                    <button className=" bg-orange-300 border-4 border-solid text-[1.3rem] text-white font-medium rounded p-2">Ver mas</button>
                </div>


            </section >

            <div class="flex justify-center my-10 sm:my-20">
                <hr class="w-48 border-2 sm:border-4"/>
            </div>
        </>
    )
}

export default Productos
