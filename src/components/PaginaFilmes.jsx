// PaginaFilmes é a "tela" que mostra a lista de filmes.
// Ela cuida de percorrer os dados e desenhar um cartão para cada filme.
import filmes from '../data/filmes'
import CartaoFilme from './CartaoFilme'

function PaginaFilmes() {
  return (
    <div className="lista">
      {filmes.map((filme) => (
        <CartaoFilme key={filme.id} filme={filme} mostrarAno={true} />
      ))}
    </div>
  )
}

export default PaginaFilmes
