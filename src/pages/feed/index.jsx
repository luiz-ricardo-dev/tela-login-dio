
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';
import {Card} from '../../components/Card'
import { UserInfo } from '../../components/UserInfo';


import {Container,Column,Title,TitleHighLight} from './styles';

const Feed = () => {
  return ( <>
    <Header autenticado={true}/>
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      
      <Column flex={1}>
          <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
         <UserInfo percentual={45} nome="Luiz Ricardo" image="https://avatars.githubusercontent.com/u/87581372?v=4"/>
         <UserInfo percentual={60} nome="Luiz Ricardo" image="https://avatars.githubusercontent.com/u/87581372?v=4"/>
         <UserInfo percentual={90} nome="Luiz Ricardo" image="https://avatars.githubusercontent.com/u/87581372?v=4"/>
         <UserInfo percentual={20} nome="Luiz Ricardo" image="https://avatars.githubusercontent.com/u/87581372?v=4"/>
         <UserInfo percentual={40} nome="Luiz Ricardo" image="https://avatars.githubusercontent.com/u/87581372?v=4"/>
      </Column>
       
    </Container>
    </>)
}

export {Feed};