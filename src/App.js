import Navbar from './Navbar';
import './index.css';
import Home from './Home';

import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Create from './Login';
import Login from './Login';

function App() {
  return (
    <Router>

   
    <div className="App">
     <Navbar />
     <div className="content">
      <switch>
        <Route exact path="/">
    <Home/>
        </Route>
      </switch>
      <switch>
        <Route exact path="/Login">
    <Login/>
        </Route>
      </switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
