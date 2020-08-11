import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-explorer-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/42723081?s=460&u=fb5ef6722781663e80c6417824e4bb5059c5fcfd&v=4"
            alt="Gustavo"
          />
          <div>
            <strong>gpmarchi/doctors-clinic-backend</strong>
            <p>
              Projeto para portfólio de uma api REST para gerenciamento de
              consultórios médicos.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/42723081?s=460&u=fb5ef6722781663e80c6417824e4bb5059c5fcfd&v=4"
            alt="Gustavo"
          />
          <div>
            <strong>gpmarchi/doctors-clinic-backend</strong>
            <p>
              Projeto para portfólio de uma api REST para gerenciamento de
              consultórios médicos.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/42723081?s=460&u=fb5ef6722781663e80c6417824e4bb5059c5fcfd&v=4"
            alt="Gustavo"
          />
          <div>
            <strong>gpmarchi/doctors-clinic-backend</strong>
            <p>
              Projeto para portfólio de uma api REST para gerenciamento de
              consultórios médicos.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
