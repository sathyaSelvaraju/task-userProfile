import React from "react";

import{useRoutes} from 'react-router'
import "./App.css";

import route from "./route";


function App() {
  const routeElement = useRoutes(route)
  return (
    <div className="App">
    
     
      {routeElement}
      
    </div>
  );
}

export default App;
