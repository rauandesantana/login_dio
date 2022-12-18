import React from 'react';
import LogoDio from './assets/image/logo_dio.svg';
import { Column, Container, Row } from './style/global';
import { Button, Content, ImageLogo, Input } from './style/app';

const App = () => {
  return (
    <Container>
      <Column alignContent='center'>
        <Row height='auto' alignContent='center'>
          <Content>
            <ImageLogo src={LogoDio} />
            <Input placeholder='E-mail' type='email' />
            <Input placeholder='Password' type='password' />
            <Button type='button'>Entrar</Button>
          </Content>
        </Row>
      </Column>
    </Container>
  );
}

export default App;
