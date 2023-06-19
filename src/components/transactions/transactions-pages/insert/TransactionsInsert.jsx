import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faShapes } from '@fortawesome/free-solid-svg-icons'

function TransactionsInsert() {
  return (
    <div className='insert'>
      <button className='image'>
        <FontAwesomeIcon icon={faImage} color='#525FE1' />
        <span>Resimler</span>
        <FontAwesomeIcon icon={faChevronDown} color='blue' />
      </button>
      <button className="shapes">
        <FontAwesomeIcon icon={faShapes} color='blue' />
        <span>Şekiller</span>
        <FontAwesomeIcon icon={faChevronDown} color='blue' />
      </button>
    </div>
  )
}

export default TransactionsInsert