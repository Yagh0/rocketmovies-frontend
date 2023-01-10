import styled from "styled-components"

export const Container = styled.div `
    
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({theme}) => theme.COLORS.WHITE_200};

    font-size: 12px;

    width: fit-content;
    height: 30px;
    padding: 8px 16px;
    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.DARK_PINK};

    cursor: pointer;
`