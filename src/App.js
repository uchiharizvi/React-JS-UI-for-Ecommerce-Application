import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './Register';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
}
export default App;
// This code defines the main application component for a React application.
// It uses React Router for routing and defines three routes:
// 1. The root route ("/") renders the `Home` component.
// 2. The "/register" route renders the `Register` component. 
