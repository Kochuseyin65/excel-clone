import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { faPen, faRotateLeft, faChevronDown, faBroom, faBorderAll, faFillDrip, faFont } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../context/excelContext'
import lodash from "lodash"
import { SketchPicker } from 'react-color'
import TransactionsHome from '../transactions/transactions-pages/home/TransactionsHome'
import TransactionsFile from '../transactions/transactions-pages/file/transactionsFile'
import TransactionsData from '../transactions/transactions-pages/data/transactionsData'
import TransactionsPageLayout from '../transactions/transactions-pages/page-layout/TransactionsPageLayout'
import TransactionsInsert from '../transactions/transactions-pages/insert/TransactionsInsert'
import TransactionsView from '../transactions/transactions-pages/view/TransactionsView'
import TransactionsFromulas from '../transactions/transactions-pages/formulas/transactionsFromulas'

function Transactions() {

  const [activePage, setActivePage] = useState("home")
  
  function showActivePage() {
    switch (activePage) {
      case "home":
        return <TransactionsHome />
        break;
      case "data":
        return <TransactionsData />
        break;
      case "file":
        return <TransactionsFile />
        break;
      case "view":
        return <TransactionsView />
        break;
      case "insert":
        return <TransactionsInsert />
        break;
      case "pageLayout":
        return <TransactionsPageLayout />
        break;
      case "formulas":
        return <TransactionsFromulas />
        break;
    
      default:
        return <TransactionsHome />
        break;
    }
  }

  const pages = [
    {
      pageFullName: "Dosya",
      pageName: "file"
    },
    {
      pageFullName: "Giriş",
      pageName: "home"
    },
    {
      pageFullName: "Ekle",
      pageName: "insert"
    },
    {
      pageFullName: "Çizim",
      pageName: "empty"
    },
    {
      pageFullName: "Sayfa Düzeni",
      pageName: "pageLayout"
    },
    {
      pageFullName: "Formüller",
      pageName: "formulas"
    },
    {
      pageFullName: "Veri",
      pageName: "data"
    },
    {
      pageFullName: "Gözden Geçir",
      pageName: "empty"
    },
    {
      pageFullName: "Görünüm",
      pageName: "view"
    },
    {
      pageFullName: "Yardım",
      pageName: "empty"
    },
  ]

  return (
    <div className="transactions">
      <div className="pages">
        <nav>
          <ul>
            {
              pages.map(
                (page, key) => (
                  <li
                  key={key} 
                    className={page.pageName === activePage && "active"}
                    onClick={
                      () => {
                        if(page.pageName !== "empty") {
                          setActivePage(page.pageName)
                        }
                      }
                    }
                    >
                    { page.pageFullName }
                  </li>
                )
              )
            }
          </ul>
        </nav>

        <div className="share">
          <button className="descriptions-btn">
            <FontAwesomeIcon icon={faShareFromSquare} />
            <span>Açıklamalar</span>
          </button>
          <button className="edit-btn">
          <FontAwesomeIcon icon={faPen} />
          <span>Düzenleme</span>
          </button>
          <button className="share-btn">
            <FontAwesomeIcon icon={faShareFromSquare} />
            <span>Paylaş</span>
          </button>
        </div>
      </div>

      {
        <div className="funcs">
          {showActivePage()}
        </div>
      }
    </div>
  )
}

export default Transactions