import React, { Component } from 'react';
import {LojaContext} from '../context/LojaContext';

class ItemProduto extends Component {
  render() {
    return (
      <div className="card mb-3 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{this.props.produto.nome}</h4>
        </div>
        <img src={this.props.produto.imagem} class="card-img-top" alt="Imagem do produto"></img>
        <div className="card-body">
        </div>
          <h4 className="card-title pricing-card-title">R$ {this.props.produto.preco.toFixed(2)}</h4>
          <LojaContext.Consumer>
            {(context) => (
              <button type="button" className="btn btn-lg btn-block btn-outline-primary" 
                onClick={() => context.comprar(this.props.produto)}>
                Comprar
              </button>
            )}
          </LojaContext.Consumer>
      </div>
    );
  }
}

export default ItemProduto;