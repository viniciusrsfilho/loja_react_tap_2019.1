import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { withRouter } from 'react-router-dom';

class Login extends Component {

    logar = () => {
      this.props.history.push('/loja')
    }

    render() {
        return (
          <form>
          <FormGroup controlId="email" bsSize="large">
            <h1>Email</h1>
            <FormControl
              autoFocus
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <h1>Password</h1>
            <FormControl
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
            onClick={() => this.logar()}
          >
            Login
          </Button>
        </form>
        )
    }
}

export default withRouter(Login);