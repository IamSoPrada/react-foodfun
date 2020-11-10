import React from "react"
import Header from "../Header"
import Container from "../../globalStyles"
import Hero from "../Hero"
import Complects from "../Complects"
import { complectsData} from '../Complects/data';


function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Complects heading='Завтрак' data={complectsData} />
      </Container>
    </>
  );
}

export default App;
