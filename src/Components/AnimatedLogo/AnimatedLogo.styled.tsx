import styled from "styled-components";

export const StyledAppLogo = styled.img`
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`