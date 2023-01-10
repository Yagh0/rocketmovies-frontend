import styled from "styled-components"

export const Container = styled.div `
    width: 100%;

    > header {
        height: 144px;

        padding: 64px 144px 59px;

        display: flex;
        align-items: center;

        background: ${({theme}) => theme.COLORS.DARK_PINK};
        
        a { 
            display: flex;
            align-items: center;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }
`

export const Form = styled.form `
    max-width: 340px;
    margin: 30px auto 0;

    > button {
        color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        font-weight: 500;
    }
`

export const Avatar = styled.div `
    position: relative;

    margin: -132px auto 32px;

    width: 186px;
    height: 186px;
    

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;
        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 50%;

        
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 3px;
        right: 3px;
        
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        }
    }
`