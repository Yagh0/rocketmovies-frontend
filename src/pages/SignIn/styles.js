import styled from "styled-components";
import image from "../../assets/background.jpg"

export const Container = styled.div `
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Form = styled.form `
    margin: 0 134px;

    display: flex;
    
    justify-content: center;
    flex-direction: column;

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 48px;
    }

    > p {
        color: ${({theme}) => theme.COLORS.GRAY_50};
        font-size: 14px;
    }

    > h2 {
        margin: 48px 0;
    }

    > a {
        margin-top: 42px;
        text-align: center;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`

export const Background = styled.div `
    flex: 1;
    background: url(${image}) no-repeat;
    background-size: cover;
`