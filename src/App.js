

import Navbar from './Navbar';

import Home from './Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Contact from './Contact';
import Filmdetail from './Filmdetail';
import Create from './Create';
import Notfound from './Notfound';

function App() {

 
  return (
    <Router>

    
    <div className="App">
      <Navbar/>
      <div className="content">

        <Switch>

          <Route exact path="/">

              <Home />

          </Route>

          <Route path="/contact">

              <Contact />
          </Route>

          <Route path="/create">

              <Create/>
          </Route>

          <Route path="/films/:id">

              <Filmdetail />
          </Route>
          <Route path="*">

            <Notfound />
          </Route>
        </Switch>
        

        

       
        
      </div>
    </div>
 </Router> );
}

export default App;
