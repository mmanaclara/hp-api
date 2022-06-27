import { Header } from "./Header";
import { WizardCard } from "./WizardCard";

import { GlobalStyle } from "./global";
import { Container } from "./styles";

export function App() {
  return (
    <Container> 
      <Header />
      <WizardCard />

      <GlobalStyle />
    </Container>
  );
}
