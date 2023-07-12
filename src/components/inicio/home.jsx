
function Home() {

  return (
    <>
      <section id="Inicio"
        className=" sm:pt-40 gap-8 flex flex-col items-center text-center h-screen justify-between sm:justify-around">
        <h3 className="text-[1.7rem] sm:text-[4rem] lg:text-[5rem] text-orange-400 underline sm:no-underline sm:text-white font-semibold ">
          LOS MEJORES ARTICULOS, <br /> UN SOLO LUGAR.
        </h3>
        <p className="mx-3 sm:w-1/2 text-[1.2rem] sm:text-[1.7rem] text-white sm:pt-20 font-medium">
          Desde nuestros orígenes tuvimos como objetivo ser líderes y referentes en materia de calidad y servicio para
          todo el mercado.
        </p>


        <a className="hover:text-gray-800 hover:bg-orange-400 rounded-md border-solid border-4 px-1 mt-3 border-yellow-200 bg-white bg-opacity-25 gap-10 text-white  font-bold text-[1.3rem] sm:text-3xl"
          href="./public/PRODUCTOS.pdf" download="Productos.pdf">Descargar lista de productos</a>
        <div className="flex justify-center my-10 sm:my-20">
          <hr className="w-48 border-2 sm:border-4" />
        </div>
      </section>|
    </>
  )
}

export default Home
