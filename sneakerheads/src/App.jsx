import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home  from './pages/Home';
import ManSneakers from './pages/ManSneakers';
import WomanSneakers from './pages/WomanSneakers';
import AdidasSneakers from './pages/AdidasSneakers';
import NikeSneakers from './pages/NikeSneakers';
import JordanSneakers from './pages/JordanSneakers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyAccount from './pages/MyAccount';
import AboutUs from './pages/AboutUs';
import FrecuentQs from './pages/FrecuentQs';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import Footer from './pages/Footer';
import { ShoppingCartProvider } from './context';

const AppRoutes = () => {
  let loggedIn = localStorage.getItem('isLoggedIn') === 'true';

  let routes = useRoutes ([
    {path: '/', element: <Home />},
    {path: '/ManSneakers', element: <ManSneakers />},
    {path: '/WomanSneakers', element: <WomanSneakers />},
    {path: '/AdidasSneakers', element: <AdidasSneakers />},
    {path: '/NikeSneakers', element: <NikeSneakers />},
    {path: '/JordanSneakers', element: <JordanSneakers />},
    {path: '/AboutUs', element: <AboutUs />},
    {path: '/FrecuentQs', element: <FrecuentQs />},
    {path: '/SignIn', element: <SignIn />},
    {path: '/SignUp', element: <SignUp />},
    {path: '/MyAccount', element: loggedIn ? <MyAccount /> : <Navigate to="/SignIn" replace />},
    {path: '/Cart', element: <Cart />},
    {path: '/*', element: <NotFound />}
  ])

  return routes;
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <div className='principalContainer'>
          <NavBar />
          <div className='containerViews'>
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;
