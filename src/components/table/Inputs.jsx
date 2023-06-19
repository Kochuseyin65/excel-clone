import React,{useState, useRef, useContext, useEffect} from 'react'
import lodash from "lodash"
import { HiXMark } from "react-icons/hi2";
import { AiOutlineCheck } from "react-icons/ai";
import { TbMathFunction } from "react-icons/tb";
import { Context } from '../../context/excelContext';



function Inputs() {

  

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
  

  // const [input, setInput] = useState("")

  
  const {inputCellValue, setInputCellValue, activeCell, setActiveCell, list, setList} = useContext(Context)

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


  function handleSubmit(e) {
    e.preventDefault()
    setList(
      oldList => {
        let newList = lodash.cloneDeep(oldList)

        // console.log(newList);

        newList.forEach(element => {
          element.forEach(
            item => {
              // console.log(item);
              if (item.cellName() === activeCell) {
                // console.log(inputCellValue);
                // console.log(item.content);
                item.content = inputCellValue
              }
            }
          )
        });

        return newList
      }
    )

    let stringList = bolString(activeCell);
    let active = `${stringList[0]}${Number(stringList[1]) + 1}`
    
    
    setActiveCell( active )

    setActiveContentToInput(active)

  }
  

  function handleChange(e) {
    

    setInputCellValue(e.target.value)

    console.log(inputCellValue);

    setList(
      oldList => {
        let newList = lodash.cloneDeep(oldList)

        // console.log(newList);

        newList.forEach(element => {
          element.forEach(
            item => {
              // console.log(item);
              if (item.cellName() === activeCell) {
                // console.log(inputCellValue);
                // console.log(item.content);
                item.content = e.target.value
              }
            }
          )
        });

        return newList
      }
    )
  }

  const {cellValue} = useContext(Context)

  return (
    <div className="inputs">
        <input className="cell" type="text" value={activeCell} />
        <div className="functions">
          <div className="cancel">
            <HiXMark />
          </div>

          <div className="tic">
            <AiOutlineCheck />
          </div>

          <div className="function">
            <TbMathFunction />
          </div>
        </div>
        <form className="cell-value"  onSubmit={handleSubmit}>
          <input value={inputCellValue}  ref={cellValue} className="a" type="text" onChange={(e) => handleChange(e)} />
        </form>
      </div>
  )
}

export default Inputs