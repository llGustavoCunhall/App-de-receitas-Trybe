import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Meals from './components/Meals';
import Provider from './context/Provider';
import Drinks from './components/Drinks';
import DoneRecipes from './components/DoneRecipes';
import Profile from './components/Profile';
import FavoriteRecipes from './components/FavoriteRecipes';
import MealsDetails from './components/MealsDetails';
import DrinksDetails from './components/DrinksDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Meals } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/meals/:id" component={ MealsDetails } />
        <Route exact path="/drinks/:id" component={ DrinksDetails } />
        <Route exact path="/footer" component={ Footer } />
      </Switch>
    </Provider>
  );
}

export default App;
