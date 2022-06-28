import styled from 'styled-components';

export const WizardCards = styled.div `
    max-width: 120.5rem;
    margin-inline: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const WizardInfo = styled.div `
    width: 30rem;
    margin-inline: auto;
    padding-inline: 1.5rem;
    margin-bottom: 1.5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;

    h4 {
        display: block;
        width: 25rem;
        padding: 0.4rem;
        border-radius: 0.8rem 0.8rem 0 0;
        background-color: var(--brown-800);
        color: var(--beige-300);

    }

    .wizardProfile {
        border: 1px solid var(--brown-800);
        border-radius: 1.2rem 1.2rem 0.8rem 0.8rem;
        margin: 1rem;
        padding-bottom: 1rem;
    }

    .imgWizard img {
        object-fit: cover;
        object-position: center -4.5rem;
        width: 25rem;
        height: 20rem;
    }
`