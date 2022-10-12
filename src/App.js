import "./App.css";
import Loin from "./pages/Loin";
import Sinup from "./pages/Sinup";
import Record from "./pages/Record";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <div className="w-2/3 mx-auto">
        <Router>
          <Header />
          <Switch>
            <Route path="/login">
              <Loin />
            </Route>
            <Route path="/dashboard">
              <Record />
            </Route>
            <Route path="/signup">
              <Sinup />
            </Route>
            <Route path="/" exact="true">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
