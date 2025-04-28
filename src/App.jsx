import "./App.css";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import AboutActive from "./components/articles/AboutActive";
import Contact from "./components/articles/Contact";

function App() {
  return (
    <div className="app">
      <main>
          <Sidebar/>

        <div className="main-content">{/*Vamos a llevar Todo ek main content con el contenido del navBar*/}
          <NavBar/>
          <AboutActive/>{/*Dejarlo de box util y rellenalo de los diferentes componentes */}
          <Contact/>

        </div>
      </main>
    </div>
  );
}

export default App;
