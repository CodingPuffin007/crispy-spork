import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Navigation from "./Components/shared/navigation/Navigation";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Authenticte from "./pages/Auth/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";

const isAuth = false;

const user = {
  activated: false,
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <GuestRoute path="/" exact>
            <Home />
          </GuestRoute>
          <GuestRoute path="/authenticate">
            <Authenticte />
          </GuestRoute>

          <SemiProtectedRoute path="/activate">
            <Activate />
          </SemiProtectedRoute>
          <ProtectedRoute to="/rooms">
            <Rooms/>
          </ProtectedRoute>
          {/* <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const SemiProtectedRoute = ({ children, ...rest }) => {
  return (
      <Route
          {...rest}
          render={({ location }) => {
              return !isAuth ? (
                  <Redirect
                      to={{
                          pathname: '/',
                          state: { from: location },
                      }}
                  />
              ) : isAuth && !user.activated ? (
                  children
              ) : (
                  <Redirect
                      to={{
                          pathname: '/rooms',
                          state: { from: location },
                      }}
                  />
              );
          }}
      ></Route>
  );
};


const ProtectedRoute = ({ children, ...rest }) => {
  return (
      <Route
          {...rest}
          render={({ location }) => {
              return !isAuth ? (
                  <Redirect
                      to={{
                          pathname: '/',
                          state: { from: location },
                      }}
                  />
              ) : isAuth && !user.activated ? (
                  <Redirect
                      to={{
                          pathname: '/activate',
                          state: { from: location },
                      }}
                  />
              ) : (
                  children
              );
          }}
      ></Route>
  );
};

const GuestRoute = ({ children, ...rest }) => {
  return (
      <Route
          {...rest}
          render={({ location }) => {
              return isAuth ? (
                  <Redirect
                      to={{
                          pathname: '/rooms',
                          state: { from: location },
                      }}
                  />
              ) : (
                  children
              );
          }}
      ></Route>
  );
};
export default App;
