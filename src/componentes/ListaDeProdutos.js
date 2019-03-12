import React, { Component } from 'react';
import {LojaContext} from '../context/LojaContext';
import ItemProduto from './ItemProduto';
import Toolkit from '../util/Toolkit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const PRODUTOS_POR_LINHA = 4;

class ListaDeProdutos extends Component {
  renderProduto = (linha) => {
    return (
      <Row>
        {linha.map((p) => (<ItemProduto produto={p} />))}
      </Row>
    );
  }
  
  render() {
    return (
      <Container>
        <LojaContext.Consumer>
          {(context) => Toolkit.splitArray(context.state.produtos, PRODUTOS_POR_LINHA).map(this.renderProduto)}
        </LojaContext.Consumer>
      </Container>
    );
  }
}

export default ListaDeProdutos;