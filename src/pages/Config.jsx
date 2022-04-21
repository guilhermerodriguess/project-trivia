import React from 'react';
import { Link } from 'react-router-dom';

class Config extends React.Component {
  render() {
    return (
      <>
      <h2 data-testid="settings-title">Configurações</h2>
      <Link to="/project-trivia">
        <button>Voltar</button>
      </Link>
      </>
    );
  }
}

export default Config;
