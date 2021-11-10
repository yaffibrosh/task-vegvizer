import React from 'react';
import './App.css';
import styled from 'styled-components'



export default function ObjectsGrid() {

    console.log("in grid")

    let objects = [
        {
            color: "red",
            row: 0,
            col: 1
        },
        {
            color: "blue",
            row: 0,
            col: 0
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
    text-align: center;
    padding:  20px;
    justify-content:center;
    align-items:center;
    display:flex;
    grid-area: ${props => props.row+1}/${props =>props.col+1}/${props =>props.row+1}/${props =>props.col+2} ;

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
                        return <Location  row={element.row} col={element.col}>
                            <Item itemColor={element.color}></Item>
                            </Location>
                    
                    }
                    return <div class="grid-item"></div>
                })
                }
                

            </div>
</>
    );
};
