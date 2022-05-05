import styled from "styled-components"
import { keyframes } from "styled-components"

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

export const Container = styled.div`


    position: absolute;
    top: 45%;
    left: 50%;
    width: 60px;
    height: 60px;
    transform: translateX(-50%);

    &::after {
        content: "";
        background-image: url(https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png);
        background-repeat: no-repeat;
        background-position-x: 50%;
        background-position-y: 50%;
        background-size: 100%;
        position: absolute;
        margin: -6px;
        width: inherit;
        height: inherit;
        animation: ${spin} 1.1s linear infinite,1 !important;
    }




`




