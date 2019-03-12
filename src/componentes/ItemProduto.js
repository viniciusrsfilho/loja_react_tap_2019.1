import React, { Component } from 'react';
import {LojaContext} from '../context/LojaContext';
import FormataMoeda from './FormataMoeda';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ItemProduto extends Component {
  render() {
    return (
      <Col xs={3}>
        <Card className="text-center">
          <Card.Header as="h5">{this.props.produto.nome}</Card.Header>
          <Card.Img variant="top" src={this.props.produto.imagem} />
          <Card.Body>
            <Card.Title><FormataMoeda valor={this.props.produto.preco}/></Card.Title>
            <LojaContext.Consumer>
              {(context) => (
                <Button variant="outline-primary" block onClick={() => context.comprar(this.props.produto)}>
                  Comprar
                </Button>
              )}
            </LojaContext.Consumer>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default ItemProduto;