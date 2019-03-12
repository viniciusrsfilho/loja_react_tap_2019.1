import React, { Component } from 'react';
import { LojaContext } from '../context/LojaContext';
import FormataMoeda from './FormataMoeda';
import Button from 'react-bootstrap/Button';
import styles from './ItemCarrinho.css';

class ItemCarrinho extends Component {
  render() {
    return (
      <tr>
        <td><img className={styles.carrinho_img} src={this.props.produto.imagem} alt="" /></td>
        <td>{this.props.produto.nome}</td>
        <td><FormataMoeda valor={this.props.produto.preco}/></td>
        <td>
          <LojaContext.Consumer>
            {(context) => (
              <Button variant="danger" onClick={() => context.remover(this.props.index)}>
                Remover
              </Button>
            )}
          </LojaContext.Consumer>
        </td>
      </tr>
    );
  }
}

export default ItemCarrinho;