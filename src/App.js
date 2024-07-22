import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Project from "./component/Project/Project";
import Skills from "./component/Skills/Skills";
import Work from "./component/Work/Work";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Skills/>
        <Project/>
        <Work/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
