import { Container } from "./styles"

export function AddMovieButton({icon: Icon, title, loading = false, ...rest}) {
    return (
        <Container type="button" disabled={loading} {...rest}>
            {Icon && <Icon size={20}/>}
            {loading ? `Carregando...` : title}
        </Container>
    )
}