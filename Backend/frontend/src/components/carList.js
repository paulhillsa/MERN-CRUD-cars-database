import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container, Table, Button} from 'react-bootstrap';
import OldCarList from "./oldCarList";

const CarList = () => {
    // set states
    const [cars, setCars] = useState([
        {
            _id: "",
            model: "",
            make: "",
            registrationNumber: "",
            owner: "",
        }
    ]);
    const [message, setMessage] = useState("");

    // onload get all cars and set them to state
    useEffect(() => {
        axios.get("http://localhost:3001/cars").then(response => {
            setMessage(response.data.message);
            setCars(response.data.result);
        });
    }
    , []);

    //delete car from database
    const deleteCar = (id) => {
        axios.delete(`http://localhost:3001/cars/deleteCar/${id}`).then(res => {
            setCars(cars.filter(car => car._id !== id));
        });
        //reload page
        window.location.reload();
        alert("Car deleted");
    }

    //render table with all cars
    return (
        <Container className="carList-container">
            <h1>Car List</h1>
            <p>{message}</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Registration Number</th>
                        <th>Owner</th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through cars and render them */}
                    {cars.map(car => (
                        <tr key={car._id}>
                            <td>{car._id}</td>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.registrationNumber}</td>
                            <td>{car.owner}</td>
                            {/* delete car button */}
                            <td> <Button variant="danger" onClick={() => deleteCar(car._id)}> Delete </Button> </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <OldCarList />
        </Container>
    );
};

export default CarList;