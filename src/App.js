import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Index from "./pages/Index"
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import "./styles/global.css"

const App = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/home" component={Index}/>
                <Route exact path="/skills" component={Skills}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/about-me" component={About}/>
                <Route exact path="/contact-me" component={Contact}/>
                <Route exact path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}
 
export default App;