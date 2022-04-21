import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Config from './pages/Config';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/project-trivia" component={ Login } />
        <Route path="/project-trivia/game" component={ Game } />
        <Route path="/project-trivia/config" component={ Config } />
        <Route path="/project-trivia/feedback" component={ Feedback } />
        <Route path="/project-trivia/ranking" component={ Ranking } />
      </Switch>
    </div>
  );
}
