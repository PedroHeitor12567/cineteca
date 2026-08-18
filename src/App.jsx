import { useState } from 'react'
import PaginaFilmes from './components/PaginaFilmes'
import PaginaSobre from './components/PaginaSobre'
import PaginaContato from './components/PaginaContato'
import Rodape from './components/Rodape'
import filmes from './data/filmes'
import './App.css'

function App() {

  const [tela, setTela] = useState('filmes')

  return (
    <div className="app">
      <header className="cabecalho">
        <h1>Cineteca</h1>
        <p>Minha coleção de filmes</p>
        <p>Total de filmes: {filmes.length}</p>
      </header>

      <nav className="menu">
        <button
          className={tela === 'filmes' ? 'menu-botao ativo' : 'menu-botao'}
          onClick={() => setTela('filmes')}
        >
          Filmes
        </button>
        <button
          className={tela === 'sobre' ? 'menu-botao ativo' : 'menu-botao'}
          onClick={() => setTela('sobre')}
        >
          Sobre
        </button>
        <button
          className={tela === 'contato' ? 'menu-botao ativo' : 'menu-botao'}
          onClick={() => setTela('contato')}
        >
          Contato
        </button>
      </nav>

      {tela === 'filmes' && <PaginaFilmes />}
      {tela === 'sobre' && <PaginaSobre />}
      {tela === 'contato' && <PaginaContato />}

      <Rodape />
    </div>
  )
}

export default App
