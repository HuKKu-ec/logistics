import About from "./Component/About";
import Career from "./Component/Career";
import Contact from "./Component/Contact";
import Foot from "./Component/Foot";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import Qhse from "./Component/Qhse";
import Services from "./Component/Services";

function App() {
  return (
    <div className="App">
   
  <header> 
   <Navbar/>
   </header>
   <section>
   <Home/>
   <About/>
   <Services/>
   <Qhse/>
   <News/>
   <Career/>
   <Contact/>
   </section>
   <footer>
   
   <Foot/>

   </footer>
    </div>
  );
}

export default App;
