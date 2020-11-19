import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppFooter, AppHeader, Landing, People } from "./sections";

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
