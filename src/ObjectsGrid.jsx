import React from 'react';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';



export default function ObjectsGrid() {

    console.log("in grid")

    let objects = [
        {
            color: "red",
            row: 0,
            col: 0
        },
        {
            color: "blue",
            row: 0,
            col: 1
        },
        {
            color: "green",
            row: 1,
            col: 0
        },
        {
            color: "orange",
            row: 3,
            col: 1
        }
    ];
    let cols = [0,1];
    let rows = [0,1,2,3];

    return (
        
            <Container style = {{marginTop:"100px"}}>
                {rows.map((row) => {
                    return <Row className = "row">
                        {cols.map((col) => {
                            return <Col className = "col">
                                {objects.map((element) => {
                                    if(element.row===row && element.col===col)
                                        return <div class = "d-flex justify-content-center align-items-center" className = "object"    
                                            style={{ width: "100px", height: "50px", backgroundColor: element.color }}>
                                        
                                        </div>
                                })}
                            </Col>
                        })}
                    </Row>
                })}
            </Container>

    );
};
