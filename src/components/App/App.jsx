import { ContactForm } from "components/ContactForm/ContactForm";
import { Contacts } from "components/Contacts/Contacts";
import { Filter } from "components/Filter/Filter";
import { PageTitle } from "components/PageTitle/PageTitle.styled";
import { Container, SectionTitle } from "./App.styled";


const App = () => {
  
  return (
<>
    <PageTitle>goit react hw 07 phonebook</PageTitle>
    <Container>
      <SectionTitle>Phonebook</SectionTitle>
      <ContactForm />
      <Filter />
      <SectionTitle>Contacts</SectionTitle>
      <Contacts />
    </Container>
  </>    
  );
};

export default App;

