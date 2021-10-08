import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Navigation from './Components/shared/navigation/Navigation'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Switch>
          <Route path="/" exact> 
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
