import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="Informe seu E-mail" />
        <input type="password" placeholder="Informe sua senha" />

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="register"><FiLogIn />Criar conta</a>
    </Content>
    <Background/>
  </Container>
);

export default SignIn;