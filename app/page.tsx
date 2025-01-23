// import Header from "./components/Header/page"
import Hero from "./components/Hero/hero";
import Shoes from "./components/Shoes/page"
import { Button } from "@/components/ui/button"
import Section from "./components/Section/page"
// import Footer from "./components/Footer/page"


export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <Shoes/>
      {/* <Button/> */}
      <Section/>
      {/* <Footer/> */}
      
    </div>
  )
}