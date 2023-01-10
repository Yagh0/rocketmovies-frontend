import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 116px;

    padding: 24px 123px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div:nth-child(2) {
        max-width: 630px;
    }

    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
`

export const Logo = styled.div `
    > h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;

        color: ${({theme}) => theme.COLORS.PINK};
    }
`

export const Profile = styled.div `
    max-width: 198px;
    height: 68px;
    display: flex;
    gap: 9px;

    > div {
        display: flex;
        flex-direction: column;

        strong {
            color: ${({theme}) => theme.COLORS.WHITE};
            cursor: pointer;
        }

        span {
            text-align: right;
            color: ${({theme}) => theme.COLORS.GRAY_200};

            font-size: 14px;
            line-height: 18px;

            cursor: pointer;
        }
    }

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};

        cursor: pointer;
    }
`