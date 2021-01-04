import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppNav from "./components/AppNav/AppNav";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Portfolio from "./pages/Portfolio/Portfolio.js";
import Contact from "./pages/Contact/Contact.js";
import Fab from './components/Fab/Fab'
import "./App.css"
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <CssBaseline />
        <AppNav/>
        <Fab/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home">
                <Redirect to="/"/>
            </Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />            
            <Route exact path="/contact" component={Contact} /> 
        </Switch>
    </BrowserRouter>
  );
}
export default App;

