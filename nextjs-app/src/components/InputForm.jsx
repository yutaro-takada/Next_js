import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlusSquare } from '@fortawesome/pro-solid-svg-icons'
// import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

export const InputForm = () => {
    return <div className="inputForm">
        <form>
            <input type="text" />
            <button>
                {/* <FontAwesomeIcon icon={faPlusSquare} />  */}
            </button>
      </form>
  </div>
}
