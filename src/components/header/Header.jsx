import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faGear } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="header">
      <div className="page-info">
        <div className="menu">
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className="page-name">
          Kitap 3 - Ondrive üzerinde kaydedildi
        </div>

      </div>

      <div className="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="ARA" />
      </div>

      <div className="profile">
        <div className="settings">
        <FontAwesomeIcon icon={faGear} />
        </div>
        <div className="user">HK</div>
      </div>
    </div>
  )
}

export default Header