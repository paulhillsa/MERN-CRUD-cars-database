import React, {useState, useEffect} from "react";
import axios from "axios";
import {Container, Button, Form, FormGroup} from 'react-bootstrap';

const CarUpdate = (props) => {
    const [car, setCar] = useState({
        id: props.id,
        make: '',
        model: '',
        registrationNumber: '',
        owner: ''
    });

    // grabs the values from the form and sets the state
    const handleChange = (e) => {
        setCar({
            ...car,
            [e.target.name]: e.target.value
        });
        console.log(car)
    };

    const handleUpdate = (e) => {
        axios.put(`http://localhost:3001/cars/updateCar/${props.id}}`, car)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }
        )
    };

    return (
        <Container>
            <h1> Update Car </h1>
            <Form>
                <FormGroup>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="id"
                        value={props.id}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                        type="text"
                        name="make"
                        value={car.make}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                        type="text"
                        name="model"
                        value={car.model}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Registration Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="registrationNumber"
                        value={car.registrationNumber}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Owner</Form.Label>
                    <Form.Control
                        type="text"
                        name="owner"
                        value={car.owner}
                        onChange={handleChange}
                    />
                </FormGroup>
                <Button variant="primary" onClick={handleUpdate}>Update</Button>
            </Form>
        </Container>
    )
};

export default CarUpdate;