import React, {useState} from "react";
import axios from "axios";
import {Container, Button, Form, FormGroup} from 'react-bootstrap';

const CarSubmit = (props) => {
    // set states
    const [car, setCar] = useState(
        {
            id: '',
            model: '',
            make: '',
            owner: '',
            registrationNumber: '',
        }
    );

    // grabs the values from the form and sets the state
    const handleChange = (e) => {
        setCar({
            ...car,
            [e.target.name]: e.target.value
        });
        console.log(car)
    };

    // add car or update if id field left blank to database on submit
    const handleSubmit = (e) => {
        e.preventDefault();
        //if no id, add new car
        if (car.id === '') {
        axios.post('http://localhost:3001/cars/createCar', car)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
            //reload page
            window.location.reload();
            alert('Car added successfully');
        } else {
            //if id, update car
            axios.put(`http://localhost:3001/cars/updateCar/${car.id}`, car)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
            //reload page
            window.location.reload();
            alert(`Car with id: ${car.id} updated successfully`);
        }
    };

    // update many by owner name
    const handleUpdateMany = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/cars/updateMany/${car.owner}`, car)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
        //reload page
        window.location.reload();
        alert(`All cars with Owner: ${car.owner} updated successfully`);
    };

// render form for car info and the submit car button
return (
    <Container>
        {/* form to enter details of new car for submission */}
        <h1> Submit Car Form </h1>
        <Form>
            <FormGroup>
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" name="id" placeholder="Enter ID to Update existing car OR simply leave out and enter details below to add new car" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Make</Form.Label>
                <Form.Control type="text" name="make" placeholder="e.g. Ford (String)" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" name="model" placeholder="e.g. 2013 (Number) NB Must be number" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Owner</Form.Label>
                <Form.Control type="text" name="owner" placeholder="e.g. Peter (String) NB enter existing owner here for update many"onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Registration Number</Form.Label>
                <Form.Control type="text" name="registrationNumber" placeholder="e.g. abc123xyz (String)" onChange={handleChange}/>
            </FormGroup>
            {/* Submit car button */}
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit (Add / Update One) Car
            </Button>
            {/* Update many button */}
            <Button variant="warning" type="submit" onClick={handleUpdateMany}>
                Update Many By Owner
            </Button>
        </Form>
    </Container>
)
}

export default CarSubmit;
