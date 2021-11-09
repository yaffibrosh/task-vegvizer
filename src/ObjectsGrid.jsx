import React from 'react';
import './App.css';
import styled from 'styled-components'



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
        null,
        null,
        null,
        null,
        {
            color: "orange",
            row: 3,
            col: 1
        }
    ];
    const Location = styled.div`
    grid-column-start: ${props => props.itemColStart || null};
    grid-column-end:  ${props => props.itemColEnd || null};
    grid-column-start: ${props => props.itemRowStart || null};
    grid-column-end:  ${props => props.itemRowEnd || null};
    padding:  20px;
    align-items:center;
    justify-content:center;
    align-items:center;
    display:flex;
  `

const Item = styled.div`
  background-color: ${props => props.itemColor || "white"};
  width: 100px;
  height: 50px;
`

    return (
        <>

            <div class="grid-container">
                {objects.map((element) => {
                    if (element) {
                        return <div class="grid-item"><Location
                            itemColStart={element.col}
                            itemColEnd={element.col + 1}
                            itemRowStart={element.row}
                            itemRowEnd={element.row + 1}
                        >
                            <Item itemColor={element.color}></Item>
                        </Location>
                        </div>
                    }
                    return <div class="grid-item"></div>
                })
                }

            </div>
</>
    );
};
