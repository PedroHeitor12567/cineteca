import { useState } from 'react'

function CartaoFilme({ filme, mostrarAno = true }) {
  const [assistido, setAssistido] = useState(filme.assistido)

  const [curtidas, setCurtidas] = useState(0)

  function alternarAssistido() {
    setAssistido(!assistido)
  }

  function curtir() {
    setCurtidas(curtidas + 1)
  }

  return (
    <div className="cartao">
      <h2 className="cartao-titulo">{filme.titulo}</h2>

      {mostrarAno && <p className="cartao-ano">Ano: {filme.ano}</p>}

      <p className="cartao-genero">Gênero: {filme.genero}</p>

      <p className="cartao-status">
        {assistido ? 'Assistido' : 'Não assistido'}
      </p>

      <button className="cartao-botao" onClick={alternarAssistido}>
        Marcar como {assistido ? 'não assistido' : 'assistido'}
      </button>

      <div className="cartao-curtidas">
        <button className="cartao-botao" onClick={curtir}>
          Curtir
        </button>
        <span> {curtidas} curtida{curtidas === 1 ? '' : 's'}</span>
      </div>
    </div>
  )
}

export default CartaoFilme
