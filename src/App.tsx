import { Header } from "./components/Header";
import { WizardCard } from "./components/WizardCard";

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
