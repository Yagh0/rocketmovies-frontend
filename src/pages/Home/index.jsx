import { Container, Title, Movies } from "./styles"

import { FiPlus } from 'react-icons/fi'

import { Header } from "../../components/Header"
import { AddMovieButton } from "../../components/AddMovieButton"
import { Movie } from "../../components/Movie"

export function Home() { 
    return (
        <Container>
            <Header/>
            <div className="page">
                <Title>
                    <span>Meus filmes</span>
                    <AddMovieButton to="/createmovie" title="Adicionar filme" icon={FiPlus}/>
                </Title>
                <Movies>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                </Movies>
            </div>
        </Container>
    )
}