import React, { useContext, useState } from 'react'
import { faPen, faRotateLeft, faChevronDown, faBroom, faBorderAll, faFillDrip, faFont } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../../../context/excelContext'
import { SketchPicker } from 'react-color'
import lodash from "lodash"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'



function TransactionsHome() {

    const {list, setList, activeCell, fontSize, setFontSize, cellValue, thick, setThick, pastPages} = useContext(Context)

    const [backgroundColorPalette, setBackgroundCOlorPalette] = useState({
      isOpen: false,
      color: "#000000",
    })
  
    const [fontColor, setFontColor] = useState(
      {
        isOpen: false,
        color: "#000000"
      }
    )
  
    function handleFontSize(e,item) {
      // console.log(e.target.value);
  
      setFontSize(e.target.value)
      setList(
        oldList => {
          let newList = lodash.cloneDeep(oldList)
  
          newList.forEach(row => {
            row.forEach(
              cell => {
                
                if ( activeCell === cell.cellName() ) {
                  console.log(activeCell);
                  cell.style.fontSize = e.target.value;
                }
                
              }
            )
          });
  
          return newList;
        }
      )
      
      cellValue.current.focus()
    }
  
    function handleIsThick() {
      setList(
        oldList => {
          let newList = lodash.cloneDeep(oldList)
  
          newList.forEach(
            row => {
              row.forEach(
                cell => {
                  if (activeCell === cell.cellName()) {
                    cell.style.isThick = !cell.style.isThick
                    setThick(cell.style.isThick)
                  }
                }
              )
            }
          )
          // setThick(cell.style.isThick && "thick")
          return newList
        }
  
      )
      
      cellValue.current.focus()
  
    }
  
    function getIsThick() {
      let newList = lodash.cloneDeep(list)
  
      typeof newList === "object" && newList.forEach(
        row => {
          row.forEach(
            cell => {
              if (activeCell === cell.cellName()) {
                console.log(cell.style.isThick);
                return cell.style.isThick
              }
            }
          )
        }
      )
    }


  return (
      <>
        <div className="pano">
          <button
          onClick={() => {
            console.log("tıklandı");
            setList(pastPages[pastPages.length - 2])
          }}
          >
          <FontAwesomeIcon icon={faRotateLeft} />
          <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <button>
          <FontAwesomeIcon icon={faClipboard} />
          <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <button>
          <FontAwesomeIcon icon={faBroom} />
            {/* <i className="fa-solid fa-chevron-down"></i> */}
          </button>
     
        </div>

        <div className="font">
          <select className="font-family">
            <option value="calibri">Calibri</option>
            <option value="open-sans">Open Sans</option>
            <option value="roboto">Roboto</option>
            <option value="inter">Inter</option>
            <option value="nato-sans">Nato Sans</option>
          </select>

          <select className="font-size"
          value={fontSize}
          onChange={
            (e) => {
              handleFontSize(e)
            }
          }>
            {
              [4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38].map(
                ( item,key ) => {
                  
                  return (
                    <option key={key}>{item}</option>
                  )
                }
              )
            }
          </select>

          <div className={thick ? "thick" : "not"} onClick={handleIsThick} >
            K
          </div>

          <div className="borders"
            
          >
          <FontAwesomeIcon icon={faBorderAll} />
          </div>

          <div className="fill-color" onClick={(old) => {
            
            setBackgroundCOlorPalette(
              old => (
                {
                  isOpen: !old.isOpen,
                  color: old.color,
                }
              )
            )

          }}>
            {
              backgroundColorPalette.isOpen && (

                <SketchPicker 
                  color={backgroundColorPalette.color}
                  // color={backgroundColorPalette.color}
                  onChangeComplete={(color) => {
                    console.log(color);

                    setList(
                      oldList => {
                        let newList = lodash.cloneDeep(oldList)
                        newList.forEach(
                          row => {
                            row.forEach(
                              cell => {
                                if( activeCell === cell.cellName() ) {
                                  cell.style.backgroundColor = color.hex
                                }
                              }
                            )
                          }
                        )

                        return newList
                      }
                    )

                    setBackgroundCOlorPalette(
                      old => {
                        return {
                          isOpen: old.isOpen,
                          color: color.hex,
                        }
                      }
                    )
                  }}
                  />

              )
            }
            <FontAwesomeIcon icon={faFillDrip} />
          </div>

          <div className="font-color" onClick={() => setFontColor(
            (old) => (
              {
                isOpen: !old.isOpen,
                color: old.color
              }
            )
          )}>

            {
              fontColor.isOpen && <SketchPicker 
                color={fontColor.color}
                onChangeComplete={(color) => {
                  setList(
                    oldList => {
                      let newList = lodash.cloneDeep(oldList)
                      newList.forEach(
                        row => {
                          row.forEach(
                            cell => {
                              if( activeCell === cell.cellName() ) {
                                cell.style.color = color.hex
                              }
                            }
                          )
                        }
                      )

                      return newList
                    }
                  )

                  setFontColor(
                    old => {
                      return {
                        isOpen: old.isOpen,
                        color: color.hex,
                      }
                    }
                  )

                }}
              />
            }

          <FontAwesomeIcon icon={faFont} />

          </div>


        </div>

        
        </>
  )
}

export default TransactionsHome