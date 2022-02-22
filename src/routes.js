import { Routes as RoutesDom, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';

const Routes = () => {
    return (
        <RoutesDom>
            <Route element={<Home />} path='/' exact />
            <Route element={<Register />} path='/register'/>

        </RoutesDom>
    );
};

export default Routes;