import React from 'react';
import LogoDio from './assets/image/logo_dio.svg';
import { Column, Container, Row } from './style/global';
import { Button, Content, Form, ImageLogo, Input, InputError } from './style/app';
import { useForm } from 'react-hook-form';

const App = () => {
  const { 
    register, 
    handleSubmit,
    formState: {errors, isValid}
  } = useForm({mode: "onChange", reValidateMode: "onChange"});

  const onSubmit = (data: any) => console.log(data);

  const emailError = (error: any) => {
    const valueError = error?.message?.toString();

    if (valueError === undefined) {
      return "";
    } else if (valueError === "empty") {
      return "Campo obrigatório";
    } else if (valueError === "") {
      return "E-mail invalido";
    } else {
      return "";
    }
  }

  const passwordError = (error: any) => {
    const valueError = error?.message?.toString();

    if (valueError === undefined) {
      return "";
    } else if (valueError === "empty") {
      return "Campo obrigatório";
    } else if (valueError === "") {
      return "Minimo de 6 caracteres";
    } else {
      return "";
    }
  }

  return (
    <Container>
      <Column alignContent='center'>
        <Row height='auto' alignContent='center'>
          <Content>
            <ImageLogo src={LogoDio} />
            <Form onSubmit={handleSubmit(onSubmit)}>
              {/* Input E-mail */}
              <Input placeholder='E-mail' type='email' {...register('email', { 
                pattern: /^([\w\.-_]+)@+[\w]+((\.+\w{2,3}){1,2})$/g,
                required: "empty",
              })} aria-invalid={errors.email ? "true" : "false"} />
              {/* Menssagem de Erro E-mail */}
              <InputError role="alert">{ emailError(errors.email) }</InputError>
              {/* Input Password */}
              <Input placeholder='Password' type='password' {...register('password', {
                minLength: 6, 
                required: "empty",
              })} aria-invalid={errors.password ? "true" : "false"} />
              {/* Menssagem de Erro Password */}
              <InputError role="alert">{ passwordError(errors.password) }</InputError>
              <Button disabled={!isValid} type='submit'>Entrar</Button>
            </Form>
          </Content>
        </Row>
      </Column>
    </Container>
  );
}

export default App;
