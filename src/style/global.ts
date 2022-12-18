import styled, { createGlobalStyle, css } from "styled-components";
import { GlobalTypes } from "./global_types";

export default createGlobalStyle`
    *, body {
        margin: 0px;
        padding: 0px;
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 300;
        color: #FFF;
        user-select: none;
        box-sizing: border-box;
    }
    body {
        background-color: #000;
    }
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Row = styled.div<GlobalTypes>`
    display: flex;
    flex-flow: row nowrap;

    ${({width}) => (width === undefined) && css`
        width: 100%;
    `}

    ${({height}) => (height === undefined) && css`
        height: 100%;
    `}

    ${({width}) => (width !== "" && width !== "auto") && css`
        width: ${width};
    `}

    ${({height}) => (height !== "" && height !== "auto") && css`
        height: ${height};
    `}

    ${({alignContent}) => (alignContent !== "") && css`
        justify-content: ${alignContent};
    `}

    ${({alignItems}) => (alignItems !== "") && css`
        align-items: ${alignItems};
    `}
`;

export const Column = styled.div<GlobalTypes>`
    display: flex;
    flex-flow: column nowrap;

    ${({width}) => (width === undefined) && css`
        width: 100%;
    `}

    ${({height}) => (height === undefined) && css`
        height: 100%;
    `}

    ${({width}) => (width !== "" && width !== "auto") && css`
        width: ${width};
    `}

    ${({height}) => (height !== "" && height !== "auto") && css`
        height: ${height};
    `}

    ${({alignContent}) => (alignContent !== "") && css`
        justify-content: ${alignContent};
    `}

    ${({alignItems}) => (alignItems !== "") && css`
        align-items: ${alignItems};
    `}
`;