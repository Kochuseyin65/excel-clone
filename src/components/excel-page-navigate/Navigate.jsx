import React from 'react'

function Navigate() {
  return (
    <div className="excel-pages-navigate">
      <div className="navigate-before">
        <span className="material-symbols-outlined">
          navigate_before
          </span>
      </div>
      <div className="navigate-next">
        <span className="material-symbols-outlined">
          navigate_next
          </span>     
      </div>
      <div className="excel-pages-menu">
        <span className="material-symbols-outlined">
          menu
          </span>
      </div>


      <div className="excel-pages">
        Sayfa 1
      </div>

      <div className="excel-pages-add">
        <div className="excel-pages-menu">
          <span className="material-symbols-outlined">
            add
            </span>
        </div>
      </div>
    </div>
  )
}

export default Navigate