import About from "./components/about/About"
import Brand from "./components/brand/Brand"
import Hero from "./components/hero/Hero"
import Footer from "./components/layout/footer/Footer"
import Header from "./components/layout/header/Header"
import News from "./components/newsletter/News"
import Products from "./components/products/Products"


function App() {

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Brand/>
        <Products/>
        <About/>
        <News/>
      </main>
      <Footer/>
    </>
  )
}

export default App
