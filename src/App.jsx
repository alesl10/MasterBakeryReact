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
