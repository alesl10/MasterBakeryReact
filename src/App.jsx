import Home from './components/inicio/home'
import Header from './components/header/index'
import QuienesSomos from './components/quienessomos/index'
import Servicios from './components/servicios/index'
import Productos from './components/productos/index'
import Contacto from './components/contacto/index'
import Footer from './components/footer/index'



function App() {

  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#navbar');
    const scrolled = window.scrollY > 200;
  
    if (scrolled) {
      navbar.classList.remove('bg-orange-400')
      navbar.classList.add('bg-orange-400/50')
      navbar.classList.add('hover:bg-orange-400')
    } else {
      navbar.classList.remove('bg-orange-400/50')
      navbar.classList.add('bg-orange-400')
    }
  });

  return (
    <>
      <div className="fixed w-screen h-screen bg-fixed bg-cover -z-10"
        style={{ backgroundImage: "url(./images/premezcla-para-celiacos.webp)" }}>
        <div className="absolute w-screen h-screen bg-black opacity-70">
        </div>
      </div>

      <div id="logo" class=" sm:fixed z-30 mx-2 sm:mx-10">
        <a className="text-white font-bold text-8xl" href="./index.html">
          <img className="w-[5rem] sm:w-[8rem]" src="./images/logofinal.png" alt="" /></a>
      </div>
      <Header />
      <Home />
      <QuienesSomos/>
      <Servicios/>
      <Productos/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default App
