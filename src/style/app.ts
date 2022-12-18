import styled from "styled-components";

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

export const Input = styled.input`
    width: 80%;
    height: 45px;
    margin-bottom: 15px;
    padding: 0px 10px;
    border: 1px solid #000;
    border-radius: 0.5rem;
    background-color: #161220;
`;

export const Button = styled.button`
    position: relative;
    width: calc(80% - 10px);
    height: 40px;
    margin-top: 15px;
    margin-bottom: 25px;
    padding: 0px 10px;
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
`;