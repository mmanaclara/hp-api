import styled from "styled-components";

export const HeaderCSS = styled.header`
        margin-inline: auto;
        padding-inline: 1.5rem;
        max-width: 80rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

    a {
        text-decoration: none;
        border-radius: 2.5rem;
        padding: 0.8rem 1.6rem;
        background-color: var(--brown-800);
        color: var(--beige-300);
        font-size: 1.4rem;
        border: 1px solid var(--brown-800);
    }

    a:hover {
        filter: brightness(1.2);
    }
`