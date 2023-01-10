import { Container, Logo, Profile } from "./styles"

import { Link } from "react-router-dom"

import { Input } from "../Input"

export function Header() {
    return (
        <Container>
            <Logo>
                <h1>
                    RocketMovies
                </h1>
            </Logo>

            <Input type="text" placeholder="Pesquisar pelo título"/>

            <Profile>
                <div>
                    <Link to="/profile"><strong>Yagh0</strong></Link>
                    <span>sair</span>
                </div>

                <Link to="/profile">
                    <img src="https://github.com/Yagh0.png" alt="Imagem de Yagh0" />
                </Link>
            </Profile>
        </Container>
    )
}