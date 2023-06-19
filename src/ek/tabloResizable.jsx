import React, { useState } from 'react';
import "./styles.css"

const TabloResizable = () => {

    const [drag, setDrag] = useState(false);

    const data = [
        ['Erik',    '27.10.1990', 'Barcelona'],
        ['Andrea',  '16.10.1993', 'Barcelona'],
        ['Paula',   '06.03.2005', 'Barcelona']
    ];

    const handleStart = (e, row, col) => {

        let iniMouse = e.clientX;
        let iniSize  = document.getElementById(`${row}${col}`).offsetWidth;

        setDrag({
            iniMouse: iniMouse,
            iniSize:  iniSize
        })

    }

    const handleMove = (e, row, col) => {

        if(e.clientX){

            let iniMouse = drag.iniMouse;
            let iniSize  = drag.iniSize;
            let endMouse = e.clientX;

            let endSize = iniSize + (endMouse - iniMouse);

            document.getElementById(`${row}${col}`).style.width = `${endSize}px`;

        }

    }

    return(
        <table>
            <tbody>
                {data.map((row, i) => 
                    <tr key = {i}>
                        {row.map((col, j) => 
                            <td  key = {j} id = {`${i}${j}`}>
                                {data[i][j]}
                                <div 
                                    className   = 'Dragger'
                                    draggable   = {true}
                                    onDragStart = {(e) => handleStart(e, i, j)}
                                    onDrag      = {(e) => handleMove(e, i, j)}
                                />
                            </td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    );

}

export default TabloResizable;
