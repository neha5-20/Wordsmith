import Single from './Pages/single/Single';
import Home from './Pages/Home/Home';
import Setting from './Pages/settings/Setting'
import TopBar from './components/topbar/TopBar';
import Write from './Pages/write/Write';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

export const URL = process.env.REACT_APP_SERVER_URL ;
function App() {
   const user = false;
  return (
  <Router>
     <TopBar/>
     <Switch>
       <Route exact path="/" >
          <Home/>
       </Route>
       <Route path="/register" >{user ? <Home/> : <Register/>}</Route>
       <Route path="/login" >{user ? <Home/> : <Login/>}</Route>
       <Route path="/write">{user ? <Write/> : <Register/>}</Route>
       <Route path="/settings">{user ? <Setting/> : <Register/>}</Route>
       <Route path="/post/:postId">
          <Single/>
       </Route>
    </Switch>
  </Router>
    
  );
}

export default App;
