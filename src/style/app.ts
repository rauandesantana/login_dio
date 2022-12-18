import styled, { css } from "styled-components";
import { AppTypes } from "./app_types";

export const Content = styled.div`
    width: 50%;
    max-width: 400px;
    min-width: 270px;
    padding: 10px;
    border-radius: 1rem;
    background-color: #1E192C;
    
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
`;

export const ImageLogo = styled.img`
    width: 60%;
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const Form = styled.form`
    width: 100%;
    
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`;

export const Input = styled.input`
    width: 80%;
    height: 45px;
    padding: 0px 10px;
    border: 1px solid #000;
    border-radius: 0.5rem;
    background-color: #161220;
`;

export const InputError = styled.p`
    width: 75%;
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 500;
    color: #EA3737;
`;

export const Button = styled.button<AppTypes>`
    position: relative;
    width: calc(80% - 10px);
    height: 40px;
    margin-top: 15px;
    margin-bottom: 25px;
    padding: 0px 10px;
    font-weight: 700;
    border-radius: 2rem;
    background-color: #E4105D;
    cursor: pointer;

    &::after {
        content: "";
        position: absolute;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 2rem;
        border: 1px solid #E4105D;
        top: -6px;
        left: -6px;
    }
    
    &:hover { filter: brightness(1.05); }
    &:active { filter: brightness(1.2); }


    ${({disabled}) => (disabled === true) && css`
        opacity: 0.5;
        cursor: default;
        &:hover { filter: brightness(1); }
        &:active { filter: brightness(1); }
    `}
`;