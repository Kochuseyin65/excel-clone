import React, { useContext } from "react";
import { Context } from "../../context/excelContext";

function Row({id, item}) {

    const { list, setList, activeCell, columns, setActiveCell, cellValue, inputCellValue, setInputCellValue, setFontSize, setThick } = useContext(Context);


    function handleClick(cell) {
      
      cellValue.current.focus()
      setActiveCell(cell.cellName())
      setInputCellValue(cell.content)
      setFontSize(cell.style.fontSize)
      // setThick(cell.style.isThick ? "thick" : "not")
      
    }

    function findColor(hex) {
      // Hex değerini RGB değerine dönüştürme
      var r = parseInt(hex.substr(1, 2), 16);
      var g = parseInt(hex.substr(3, 2), 16);
      var b = parseInt(hex.substr(5, 2), 16);
    
      // Renk tonunu hesaplama
      var renkTonu = (r * 299 + g * 587 + b * 114) / 1000;
    
      // Arkaplan rengini belirleme
      if (renkTonu >= 128) {
        return "black"; // Açık tonlu renk, arka plan siyah
      } else {
        return "white"; // Koyu tonlu renk, arka plan beyaz
      }
    }
    

  return (
    <tr >


      <td className="row">{id + 1}</td>

      {item.map((cell, key) => {
        return (
          <td
            className={
              activeCell === cell.cellName() ? "active-cell" : undefined
            }
            key={key}
            value={cell.cellName()}
            onClick={() => handleClick(cell)}
            style={
              {
                backgroundColor: cell.style.backgroundColor,
                
              }
            }
          >
            <div
              style={{
                // cursor: "pointer",
                color: cell.style.color,
                fontWeight: cell.style.isThick && "bold",
                fontSize: `${cell.style.fontSize}px`
              }}
            >
              {cell.content}
            </div>
          </td>
        );
      })}
    </tr>
  );
}

export default Row;
