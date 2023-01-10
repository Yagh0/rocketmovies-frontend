import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 222px;
    padding: 32px;
    background-color: ${({theme}) => theme.COLORS.DARK_PINK};

    border-radius: 16px;

    > h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 8px;
    }

    .rating { 
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;

        color: ${({theme}) => theme.COLORS.PINK};


        svg {
            width: 12px;
            height: 12px;
        }
        .rated {
            fill: ${({theme}) => theme.COLORS.PINK};
        }
    }

    > p {
        font-size: 16px;
        line-height: 19px;

        margin-bottom: 15px;
    }

    .tagList {
        display: flex;
        gap: 8px;
        align-items: center;

        > div {
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};;
        }
    }
`