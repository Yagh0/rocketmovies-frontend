import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;

    width: 207px;
    height: 56px;

    border-radius: 10px;
    padding: 0 16px;
    margin-top: 16px;

    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    &:disabled {
        opacity: 0.5;
    }
`