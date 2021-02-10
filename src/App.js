import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";
import Footer from "./components/Footer";
import Auth from "./authentication/Auth";
import WebinarManage from "./pages/WebinarManage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Router>
        <Switch>
          <Route path="/Home">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <PrivateRoute path="/manage" component={WebinarManage} />
          <Route
            path="/logout"
            render={() => {
              Auth.logout();
              return <HomePage />;
            }}
          />
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
