import React, { Component } from 'react';
import {LojaContext} from '../context/LojaContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Badge from 'react-bootstrap/Badge';

class BarraDeBusca extends Component {    
  render() {
    return (
      <Navbar bg="light" fixed="top">
        <Navbar.Brand>Facisa Store</Navbar.Brand>
        <Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <LojaContext.Consumer>
              {(context) => (
                <React.Fragment>
                  <Form inline>
                    <FormControl type="text" placeholder="Procurar" className="mr-sm-2" onChange={(event) => context.buscar(event.target.value)} />
                  </Form>
                  { (context.state.carrinho.length <= 0) ? '' : (
                    <Button variant="primary" onClick={context.mostrarCarrinho}>
                      🛒 <Badge variant="light">{context.state.carrinho.length}</Badge>
                    </Button>
                  ) }
                </React.Fragment>
              )}
            </LojaContext.Consumer>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    );
  }
}

export default BarraDeBusca;