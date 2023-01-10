import { Container, Main, Content } from "./styles"

import { Link } from "react-router-dom"

import { FiArrowLeft } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"


export function CreateMovie() {
    return (
        <Container>
            <Header/>
            <Main>
                <Content>
                    <Link to="/">
                        <FiArrowLeft/>
                        Voltar
                    </Link>

                    <h1>Novo filme</h1>

                    <div className="input-wrapper">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>

                    <textarea placeholder="Observações"/>

                    <h2>Marcadores</h2>

                    <div className="tagList">
                        <MovieItem value="React"/>
                        <MovieItem value="" isNew placeholder="Novo marcador"/>
                    </div>

                    <div className="footerButtons">
                        <Button title="Excluir filme"/>
                        <Button title="Salvar alterações"/>
                    </div>
                </Content>
            </Main>
        </Container>
    )
}