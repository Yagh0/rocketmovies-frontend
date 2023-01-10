import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    > p {
        line-height: 21px;
    }

    p + p {
        margin-top: 20px;
    }
`

export const BackButton = styled.div `
    margin-bottom: 24px;
    > a {
        display: flex;
        align-items: center;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`

export const Content = styled.div `
    padding: 40px 123px 156px;
`

export const Title = styled.div `
    display: flex;
    align-items: center;
    gap: 19px;
    margin-bottom: 24px;
    
    > h1 {
        font-weight: 500;
    }

    .rating { 
        display: flex;
        align-items: center;
        gap: 10px;
        color: ${({theme}) => theme.COLORS.PINK};

        .rated {
            fill: ${({theme}) => theme.COLORS.PINK};
        }
    }
`

export const Details = styled.div `
    color: ${({theme}) => theme.COLORS.WHITE};
    display: flex;
    gap: 16px;
    

    div {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
    }

    svg {
        color: ${({theme}) => theme.COLORS.PINK};
    }
`

export const TagList = styled.div `
    margin-top: 48px;
    margin-bottom: 40px;

    display: flex;
    gap: 8px;
`

export const Description = styled.div `
    max-height: 336px;
    overflow-y: auto;
`