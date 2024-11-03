
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {useForm} from 'react-hook-form';
import { MdEmail, MdLock} from 'react-icons/md'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
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

const schema = yup
  .object({
    email: yup.string().email('email não é valido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
  })
  .required()


const Login = () => {

  const { control, errorMessage, handleSubmit, formState: { errors, isValid }} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  console.log(isValid, errors);

  const onSubmit = data => console.log(data);

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
              <form onSubmit={handleSubmit(onSubmit)}>
                  <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="Email" leftIcon={<MdEmail />} />
                  <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                  <Button title="Entrar" variant="secundary" type="submit" />
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