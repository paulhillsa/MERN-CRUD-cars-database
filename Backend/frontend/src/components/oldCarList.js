import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container, Table} from 'react-bootstrap';

const OldCarList = () => {
    // set states
    const [oldCars, setOldCars] = useState([{
        _id: "",
        model: "",
        make: "",
        registrationNumber: "",
        owner: ""
    }]);
    const [message, setMessage] = useState('');

    // onload get all old cars
    useEffect(() => {
        axios.get('http://localhost:3001/cars/oldCars').then(response => {
            setOldCars(response.data.result);
            setMessage(response.data.message);
    });
    }, []);

    //render table with old cars
    return (
        <Container>
            <h1>Old Cars</h1>
            <p> {message} </p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Registration Number</th>
                        <th>Owner</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through old cars and display in table */}
                    {oldCars.map(oldCar => (
                        <tr key={oldCar._id}>
                            <td>{oldCar._id}</td>
                            <td>{oldCar.make}</td>
                            <td>{oldCar.model}</td>
                            <td>{oldCar.registrationNumber}</td>
                            <td>{oldCar.owner}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default OldCarList;
