
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import Banner from '../../assets/banner.jpg'
import {Container,TextContent,Title,TitleHighLight} from './styles';

const Home = () => {
  return ( <>
    <Header />
    <Container>
      <div>
        <Title> 
            <TitleHighLight>
              Implement 
            <br />
            </TitleHighLight>
            O seu futuro Global agora!
        </Title>
        <TextContent>
          Domine as tecnologias utilizadas...
        </TextContent>
        <Button title="Começar agora" variant="secundary" onClick=""/>
      </div>
      <div>
        <img src={Banner} width="450px" height="250px" alt="Imagem principal"/>
      </div>
    </Container>
    </>)
}

export { Home }