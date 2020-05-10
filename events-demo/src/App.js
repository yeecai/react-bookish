import React from "react";
import A from "./ComponentA";
import B from "./ComponentB";
import "./App.css";
import CartContainer from "./containers/CartContainer";
import BooksContaisner from "./containers/BooksContainer";
import DebouceDemo from "./containers/debouceDemo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/eventsDemo">eventsDemo</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <Link to="/debouce"> DebouceDemo</Link>
          </ul>
        </nav>

        <Switch>
          <Route path="/debouce">
            <DebouceDemo />
          </Route>
          <Route path="/cart">
            <CartContainer />
          </Route>
          <Route path="/eventsDemo">
            <A />
            <B />
          </Route>
          <Route path="/users"></Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <BooksContaisner />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;
//TODO
//ROUting
