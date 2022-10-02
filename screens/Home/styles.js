import styled from "styled-components";

export const Header = styled.header`
    font-size: 2.8rem;
    line-height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    height: auto;
    padding-top: 5.6rem;

    div {
        display: flex;
        gap: 6.4rem;
    }

    @media only screen and (max-width: 720px) {
      #about {
        display: none;
      }
    }

`;

export const MenuIcon = styled.div`

    width: 7rem;
    height: 2px;
    border-radius: 50%;
    background-color: #ffffff;
    color: #ffffff;
    display: block !important;

    position: relative;

    &::after, &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: currentColor;
    }

    &::after {
        bottom: -15px;
    }

    &::before {
        top: -15px;
    }

    @media screen and (min-width: 720px) {
        background-color: red;
        & {
            display: none !important;
        }
    }
`;

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: #050505;
    color: #FFFFFF;
    background-image: url('/background-image.png');
    background-repeat: no-repeat;
    background-position: center 40rem;
    background-size: calc(100vw - 35vw);
`

export const Main = styled.div`

    font-size: 2rem;
    line-height: 4rem;

    width: 80%;
    max-width: 720px;

    margin: 0 auto;

    text-align: center;
    margin-top: 10rem;
`
