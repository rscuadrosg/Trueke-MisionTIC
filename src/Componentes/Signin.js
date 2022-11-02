import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap';

class Signin extends Component {
    render() {
        return (
            <div className="card w-50  mt-4 m-auto p-4 bg-dark">
                <img src={process.env.PUBLIC_URL+"./multimedia/trueke_logo.png"} alt="Trueke_logo" width="200" height="auto"/>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="ingresa email" />
                        <Form.Text className="text-muted">
                            Nunca compartiremos tu correo con nadie mas.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recuerdame" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Inicia Sesion
                    </Button>
                </Form>

            </div>
        )
    }
}

export default Signin