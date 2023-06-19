import React, { useContext, useState } from 'react'
import { Context } from '../../context/excelContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Row from './Row';
import "../../ek/styles.css"


function TBody() {


    const { list, setList, activeCell, columns, setActiveCell, imageList } = useContext(Context);



    

  return (
    <div className="table-body">
        <table>
          
          {
            imageList.map(
              img => (
                <img src={img} />
              )
            )
          }

          <tbody>
            <tr>
              <td className="first-column">
                <div>
                  <FontAwesomeIcon icon={faCaretRight} rotation={90} />
                </div>
              </td>

              {columns.map((item, key) => (

                <td 
                className='column' 
                key={key}
                >
                  {item}

                </td>

              ))}
            </tr>

            {typeof list === "object" &&
              list.map((item, key) => {
                return (

                    <Row item={item} key={key} id={key} />
                
                );
              })}
          </tbody>
        </table>
      </div>
  )
}

export default TBody