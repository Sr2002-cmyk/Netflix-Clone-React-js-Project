import NavBar from "./components/Navbar/NavBar";
import'./App.css'
import YouTube from "react-youtube";
import'./components/Banner/Banner.css'
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/RowPost/Rowpost";
import'./components/RowPost/Rowpost.css'
import {Action,Comedy,Documentaries,Horror,originals, Romance} from './url'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={originals}  title='Netflix Orginals'/>
      <Rowpost url={Action}   title='Action' isSmall/>
      <Rowpost url={Comedy}   title='Comedy' isSmall/>
      <Rowpost url={Horror}   title='Horror' isSmall/>
      <Rowpost url={Romance}   title='Romance' isSmall/>
      <Rowpost url={Documentaries}   title='Documentaries' isSmall/>
    </div>
    
  );
}

export default App;

