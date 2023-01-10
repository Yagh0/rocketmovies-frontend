import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    width: fit-content;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : `none`};

    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete, .button-add {
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > input { 
        height: 56px;
        max-width: 180px;

        padding: 12px;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300}
        }
    }
`