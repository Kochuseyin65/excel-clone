import { createContext, useEffect, useState, useRef } from "react";
import lodash from "lodash"

export const Context = createContext();

function Provider({children}) {

    const cellValue = useRef()

    const [inputCellValue, setInputCellValue] = useState("")

    const [list, setList] = useState()
    const [activeCell, setActiveCell] = useState("A1")

    const [fontSize, setFontSize] = useState("")
    
    const [thick, setThick] = useState(false)

    const [imageList, setImageList] = useState(
        [
            // "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
            // "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        ]
    )

    // const [activeTransactionPage, setActiveTransactionPage] = useState("giriş")


    const columns = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    
    useEffect(
    () => {
        let rows = []
        for (let row = 1; row <= 100; row++) {
            let secondList = []
            for (let column in columns) {
                secondList.push(
                    {
                     content: "",
                     row: row ,
                     column: column ,
                     cellName : function() {
                        return `${columns[column]}${row }`
                     },
                     active: activeCell === `${columns[column]}${row}` ? true : false,
                     style: {
                        backgroundColor: "white",
                        color: "black",
                        isThick: false,
                        fontSize: 16,
                        borders: {
                            left: 0,
                            right: 0,
                            top: 10,
                            bottom: 0,
                            
                        }
                     },

                    }
                )
            }
            
            rows.push(secondList)

        }

        setList(rows)
    }
    ,[])

    
    
    

    useEffect( () => {console.log(activeCell);} ,[activeCell])
    
    // useEffect(() => {console.log(list);}, [list])

    const [pastPages, setPastPages] = useState([])

    useEffect(() => {

        setPastPages([...pastPages, list])
        console.log(pastPages);
    },[list])

    const data = {
        list,
        activeCell,
        columns,
        setActiveCell,
        setList,
        cellValue,
        setInputCellValue,
        inputCellValue,
        setFontSize,
        fontSize,
        thick,
        setThick,
        // activeTransactionPage,
        // setActiveTransactionPage,
        pastPages,
        imageList

    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}

export default Provider;