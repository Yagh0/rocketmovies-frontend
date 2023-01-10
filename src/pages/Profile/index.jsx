import { FiArrowLeft, FiCamera, FiUser, FiLock, FiMail } from "react-icons/fi"

import { Link } from "react-router-dom"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Avatar } from "./styles"

export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/Yagh0.png" alt="Imagem de Yagh0" />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="E-mail" type="text" icon={FiMail}/>
                <Input placeholder="Senha atual" type="password" icon={FiLock}/>
                <Input placeholder="Nova senha" type="password" icon={FiLock}/>

                <Button title="Salvar"/>

            </Form>
        </Container>
    )
}