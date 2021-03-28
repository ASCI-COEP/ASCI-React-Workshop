import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MyNavbar from './components/navbar';
import Jokes from './components/jokes';
import Counter from './components/counter';
import SearchFilter from './components/filter';
import Homepage from './components/homepage';


function App() {
  return (
    <>
      <Router>
      <MyNavbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/counter-app" component={Counter} />
        <Route path="/random-joke" component={Jokes} />
        <Route path="/search-filter" component={SearchFilter} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
