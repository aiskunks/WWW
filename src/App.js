import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing, People } from "./sections";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
