import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    .page {
        padding: 47px 123px;
    }
`

export const Title = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 37px;

    > span {
        font-size: 32px;
        line-height: 42px;
    }
`

export const Movies = styled.div `
    padding-right: 8px;
    width: 100%;
    height: 600px;
    overflow-y: auto;

    > div + div {
        margin-top: 24px;
    }
`