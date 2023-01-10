import { Container } from "./styles"
import { FiStar } from "react-icons/fi"

import { Tag } from "../Tag"

export function Movie() {
    return (
        <Container>
            <h1>Interestellar</h1>
            <div className="rating">
                <FiStar className="rated"/>
                <FiStar className="rated"/>
                <FiStar className="rated"/>
                <FiStar className="rated"/>
                <FiStar/>
            </div>
            <p>
                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
            </p>
            <div className="tagList">
                <Tag title="Ficção Científica"/>
                <Tag title="Drama"/>
                <Tag title="Família"/>
            </div>
        </Container>
    )
}