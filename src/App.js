import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Navigation from './Components/shared/navigation/Navigation'
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Switch>
          <Route path="/" exact> 
            <Home/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
