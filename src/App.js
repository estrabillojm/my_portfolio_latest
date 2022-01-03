import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index"
import NotFound from "./pages/NotFound";
import Skills from "./pages/Skills";
import "./styles/global.css"

const App = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/home" component={Index}/>
                <Route exact path="/skills" component={Skills}/>
                <Route exact path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}
 
export default App;