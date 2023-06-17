import logo from './logo.svg';
import './App.css';
import { Menu } from './components/menu';
import ProductsList from './components/products';
import Home, { SearshResultsDashboard } from './pages/home';
import { Router } from 'react-router';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { ProductDashboard } from './components/pricelist/prices';
import { PriceHistory } from './components/pricelist/history';
import { ProductDashboardPage, ProductHistoryDashboard } from './pages/productDashboar';


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/produto/:produto/' component={ProductDashboardPage} />
        <Route exact path='/buscar/:produto/' component={SearshResultsDashboard} />

        <Route exact path='/historico/:produto/:empresa' component={ProductHistoryDashboard} />

      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
