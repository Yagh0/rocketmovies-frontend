import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
`

export const Main = styled.div `
    width: 100%;
    height: 850px;
    
`

export const Content = styled.div `
        margin: 40px 123px 85px;
        padding-right: 16px;
        overflow-y: auto;

        > a {
            display: flex;
            align-items: center;
            color: ${({theme}) => theme.COLORS.PINK};
            margin-bottom: 24px;
        }

        > h1 {
            color: ${({theme}) => theme.COLORS.WHITE};

            font-weight: 500;
            font-size: 36px;
            line-height: 47px;
            margin-bottom: 40px;
        }

        > .input-wrapper {
            display: flex;
            gap: 40px;
            margin-bottom: 40px;
        }

        > textarea {
            width: 100%;
            height: 274px;
            padding: 18px 16px;

            background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
            color: ${({theme}) => theme.COLORS.GRAY_200};
            
            border: none;
            border-radius: 10px;

            margin-bottom: 40px;

            resize: none;

            &::placeholder {
                color: ${({theme}) => theme.COLORS.GRAY_200};
            }
        }

        > h2 {
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-weight: 400;
            font-size: 20px;
            line-height: 26px;

            margin-bottom: 24px;
        }

        > .tagList {
            border-radius: 10px;
            margin-bottom: 40px;

            height: 88px;
            width: 100%;

            padding: 16px;
            display: flex;
            background-color: ${({theme}) => theme.COLORS.BLACK};

            gap: 24px;
        }

        > .footerButtons {
            button:first-child {
                color: ${({theme}) => theme.COLORS.PINK};
                background-color: ${({theme}) => theme.COLORS.BLACK};;
            }

            display: flex;
            gap: 40px;
        }
`