

import Navbar from './Navbar';
import Home from './Home';

function App() {

  let title = "moki poki"

  let person = {
    name:"mamie",
    cool:"pas cool man"
  }
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>Our first Component is {title}</h1>

        <Home />

        <span>{person.name}</span>
        
      </div>
    </div>
  );
}

export default App;
