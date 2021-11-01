import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddService from './Addservice/AddService';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Home from './Home/Home/Home';
// import Order from './Home/Order/Order';
import Booking from './Login/Booking';
import Login from './Login/Login';
import PrivateRouter from './Login/PrivateRouter/PrivateRouter';
import ManageServices from './ManageServices/ManageServices';
// import Register from './Login/Register/Register';
import NotFound from './NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact="exact" path='/'>
                            <Home></Home>
                        </Route>
                        <Route path='/home'>
                            <Home></Home>
                        </Route>
                        <Route path='/login'>
                            <Login></Login>
                        </Route>
                        <PrivateRouter path='/Booking/:ServiceId'>
                            <Booking></Booking>
                        </PrivateRouter>
                        <Route path="/addService">
                            <AddService></AddService>
                        </Route>
                        <Route path="/manageServices">
                            <ManageServices></ManageServices>
                        </Route>
                        <Route path='*'>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
