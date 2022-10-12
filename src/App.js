import "./App.css";
import Loin from "./component/Loin";
import Record from "./component/Record";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Loin />
          </Route>
          <Route path="/users">
            <Record />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
