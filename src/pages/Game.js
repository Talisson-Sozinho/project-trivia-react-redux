import React, { Component } from 'react';
import GameHeader from '../components/GameHeader';
import Quiz from '../components/Quiz';

class Game extends Component {
  render() {
    return (
      <div>
        <GameHeader />
        <Quiz />
      </div>
    );
  }
}

export default Game;
