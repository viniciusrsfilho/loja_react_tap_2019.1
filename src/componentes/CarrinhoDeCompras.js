import React, { Component } from 'react';
import {LojaContext} from '../context/LojaContext';
import ItemCarrinho from './ItemCarrinho';
import FormataMoeda from './FormataMoeda';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

class CarrinhoDeCompras extends Component {
  render() {
    return (
      <LojaContext.Consumer>
        {(context) => {
          return (
            <Modal show={context.state.carrinhoVisivel} centered onHide={context.esconderCarrinho}>
              <Modal.Header closeButton>
                <Modal.Title>Carrinho de Compras</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Table striped bordered hover>
                  <Cabecalho/>
                  <tbody>
                    {context.state.carrinho.map(this.renderProduto)}
                  </tbody>
                  <Rodape carrinho={context.state.carrinho} />
                </Table>
              </Modal.Body>
            </Modal>
          );
        }}
      </LojaContext.Consumer>
    );
  }

  renderProduto = (p, i) => (<ItemCarrinho produto={p} index={i} />);
}

// Criando alguns hooks para simplificar o código principal
function Cabecalho() {
  return (
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Produto</th>
        <th>Valor</th>
        <th>Ação</th>
      </tr>
    </thead>
  );
}

function Rodape(props) {
  let total = props.carrinho.reduce((acc, p) => acc + p.preco, 0);

  return (
    <tfoot>
      <tr>
        <th>&nbsp;</th>
        <th>Total</th>
        <th><FormataMoeda valor={total}/></th>
        <th>&nbsp;</th>
      </tr>
    </tfoot>
  );
}

export default CarrinhoDeCompras;