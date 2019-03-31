import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import "./Login.css";

class Login extends Component {

    logar = () => {
      this.props.history.push('/loja')
    }

    render() {
        return (
          <form className="Login">
          <FormGroup controlId="email" bsSize="large">
            <h3>Email</h3>
            <FormControl
              autoFocus
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <h3>Password</h3>
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