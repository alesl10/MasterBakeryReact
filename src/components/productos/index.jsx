import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

function Productos({ products }) {
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

    const destacados = products.filter(p => p.descatado == true)
    console.log(destacados)

    return (
        <>
            <section id="productos" >
                <div className="bg-orange-400/40 p-4 flex flex-col gap-5">
                    <h2 className="text-white sm:text-5xl sm:m-4 text-center "> Nuestros productos destacados</h2>

                    <Carousel responsive={responsive}>
                        {destacados.map(p => (
                            <div className=' flex flex-col justify-center mx-[2em]   text-white border-solid   gap-2 items-center  text-xl font-medium'>
                                   <div className='w-[100%] h-[20em] overflow-hidden'>
                                     <img src={p.image4} className=' hover:contrast-200 w-[100%] h-[100%] hover:scale-110 transition-all  object-cover ' alt="imagen producto" />
                                   </div>
                                <h4 className='font-bold text-2xl'>{p.nombre}</h4>
                                <p>{p.cantidad}<span> {p.medida}</span></p>
                                <p>Categoria:<span> {p.categoria}</span></p>
                            </div>
                        )
                        )}

                    </Carousel>
                </div>
                    <Link className='flex justify-center' to={'/products'}><button className=" bg-orange-300 border-4 border-solid text-[1.3rem] text-white font-medium rounded p-2"> Ver mas </button></Link>


            </section >

            <div class="flex justify-center my-10 sm:my-20">
                <hr class="w-48 border-2 sm:border-4" />
            </div>
        </>
    )
}

export default Productos
