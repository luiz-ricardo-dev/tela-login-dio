import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    margin: 10px;

    color: #ffff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    ${({variant})=> variant != "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #e41050;

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
         
            width: calc(100% +10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`
