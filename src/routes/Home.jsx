import Inicio from '../components/inicio'
import Header from '../components/header/index'
import QuienesSomos from '../components/quienessomos/index'
import Servicios from '../components/servicios/index'
import Productos from '../components/productos/index'
import Contacto from '../components/contacto/index'
import Footer from '../components/footer/index'
import products from '../mocks/products.jsx'



function Home() {

  return (
    <>

      <Header />
      <Inicio />
      <QuienesSomos />
      <Servicios />
      <Productos products={products} />
      <Contacto />
      <Footer />

    </>
  )
}

export default Home
