import React from "react";
import Home from "./pages/Home/Home.js";
import "./App.css"
// import NavComponent from "./components/NavComponent/NavComponent.js";
// import Footer from "./components/Footer/Footer.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
{/*         <NavComponent/> */}
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/classes" component={Classes} />
            <Route exact path="/resources" component={Resources} />            
            <Route exact path="/contact" component={Contact} />                    
            <Route exact path="/login" component={Login} />                              
            <Route exact path="/adminhome" component={withAuth(AdminHome)} /> */}
        </Switch>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}
export default App;

