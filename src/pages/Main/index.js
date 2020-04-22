/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <h1>
          <FaGithubAlt /> Repositórios
        </h1>
        <Form onsubmit={() => {}}>
          <input type="text" placeholder="Adicione um repositório" />

          <SubmitButton disable>
            <FaPlus color="#fff" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
