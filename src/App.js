import "./App.css";
import Loin from "./component/Loin";
import Record from "./component/Record";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";

function App() {
  return (
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
