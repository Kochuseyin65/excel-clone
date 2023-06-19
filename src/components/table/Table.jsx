import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/excelContext";
import lodash from "lodash"
import Inputs from "c:/Users/kochu/opt/excel/src/components/table/Inputs.jsx";
import TBody from "c:/Users/kochu/opt/excel/src/components/table/TBody.jsx";


function Table() {


  const { list, setList, activeCell, columns, setActiveCell, setInputCellValue, cellValue } = useContext(Context);


  function bolString(string) {
    var harfler = "";
    var sayilar = "";
    for (var i = 0; i < string.length; i++) {
      if (isNaN(string.charAt(i))) {
        harfler += string.charAt(i);
      } else {
        sayilar += string.charAt(i);
      }
    }
    return [harfler, sayilar];
  }

  return (
    <div className="table" onKeyDown={(event) => {

      function setActiveContentToInput(cellName) {
        list.forEach(element => {
            element.forEach(
                item => {
                    if (item.cellName() === cellName) {
                        console.log(item.content);
                        setInputCellValue(item.content)
                    }
                }
            )
        });
      }

      let stringList = bolString(activeCell);
      
      
      if (event.key === "ArrowDown") {
        cellValue.current.focus()
        setActiveCell(`${stringList[0]}${Number(stringList[1]) + 1}`)
        setActiveContentToInput(`${stringList[0]}${Number(stringList[1]) + 1}`)


      } else if (event.key === "ArrowUp") {
        if (stringList[1] > 1) {
          cellValue.current.focus()
          setActiveCell(`${stringList[0]}${Number(stringList[1]) - 1}`)
          setActiveContentToInput(`${stringList[0]}${Number(stringList[1]) - 1}`)

        }

      } else if( event.key === "ArrowRight" ) {
        cellValue.current.focus()

        let index = columns.indexOf(stringList[0])
        setActiveCell(`${columns[index + 1]}${Number(stringList[1])}`)
        setActiveContentToInput(`${columns[index + 1]}${Number(stringList[1])}`)


      } else if( event.key === "ArrowLeft" ) {
        cellValue.current.focus()

        let index = columns.indexOf(stringList[0])
        setActiveCell(`${columns[index - 1]}${Number(stringList[1])}`)
        setActiveContentToInput(`${columns[index - 1]}${Number(stringList[1])}`)

        

      }

    }}>
      <Inputs />

      <TBody />
    </div>
  );
}

export default Table;
