import styled from "styled-components";

export const Container = styled.button `
    width: 100%;
    height: 56px;

    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;

    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    &:disabled {
        opacity: 0.5;
    }
`