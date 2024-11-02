import React from 'react'
import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'
import {
    BuscarInputContainer,
    Colunm,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} width="95px" height="30px" alt="logo"/>
                {autenticado ? (
                <><BuscarInputContainer>
                          <Input placeholder='Buscar...' />
                      </BuscarInputContainer>
                      <Menu>Live Code</Menu>
                      <Menu>Global</Menu>
                      </>
                    ): null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/87581372?v=4' />
                ) : (
                    <>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                    </>

                )}
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }