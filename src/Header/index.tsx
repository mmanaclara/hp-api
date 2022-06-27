import { HeaderCSS } from './style'

export function Header() {
  return (
    <HeaderCSS>
        <h2>Hogwarts Wizards</h2>
        <a href="http://hp-api.herokuapp.com/api/characters" target="_blank" rel="noopener noreferrer">
            Acesse a API
        </a>
    </HeaderCSS>
  )
}