
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { MdEmail, MdLock} from 'react-icons/md'
import { Link } from 'react-router-dom';

import Banner from '../../assets/banner.jpg'
import {Input} from '../../components/Input'

import {Column,
        Container,
        CriarText,
        EsqueciText,
        Row,
        SubtitleLogin,
        Title,
        TitleLogin,
        Wrapper
} from './styles';

const Login = () => {
  return ( <>
    <Header />
    <Container>
      <Column>
        <Title> 
          A plataforma para você aprender com experts, dominar as principais tecnologias
          e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
          <Wrapper>
              <TitleLogin>Faça o Seu cadastro</TitleLogin>
              <SubtitleLogin>Faça o login e make the change._</SubtitleLogin>
              <form>
                  <Input placeholder="Email" leftIcon={<MdEmail />} />
                  <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
                  <Button title="Entrar" variant="secundary" />
              </form>
              <Row>
                <EsqueciText>Esquci minha senha</EsqueciText>
                <CriarText>Criar conta</CriarText>
              </Row>
          </Wrapper>
      </Column>
    </Container>
    </>)
}

export {Login};