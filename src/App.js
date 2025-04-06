import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './Register';
import Home from './Home';

function App() {
    return (
        <Router>
            <Switch>
                {/* <Route path="/" element={<Home />} /> */}
                <Route exact path="/register" component={Register} />
                <Route path="/" component={Home} />
                {/* <Route path="/login" element={<Login />} /> */}
            </Switch>
        </Router>
    );
}
export default App;
// This code defines the main application component for a React application.
// It uses React Router for routing and defines three routes:
// 1. The root route ("/") renders the `Home` component.
// 2. The "/register" route renders the `Register` component. 
