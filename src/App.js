import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";

function App() {

   //state to determine what page we are on
   const[selectedPage,setSelectedPage] = useState("home")
   const isAboveMediumScreens = useMediaQuery("(min-width:1060px");

  return (

    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      
    </div>
  );
}

export default App;
