import React from "react"
import Header from "../Header"
import Container from "../../globalStyles"
import Hero from "../Hero"
import Complects from "../Complects"
import HealthyFood from "../HealthyFood"
import Features from "../Features"
import Feedback from "../Feedback"
import Footer from "../Footer"
import { complectsData } from '../Complects/data';


function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Features />
        <Complects heading='Завтрак' data={complectsData} />
        <HealthyFood />
        <Feedback />
        <Footer/>
      </Container>
    </>
  );
}

export default App;
