import React, {Fragment, useState} from 'react'

import style from './TopNav.scss'

const TopNav = () => {
    const [user, setUser] = useState(null)

    let topNavJSX = <div>
      <div>Street Food</div>
      <div>SignIn</div>
      <div>Regiter Truck</div>
      <div>Sign Up</div>
    </div>

    if (user !== null) {
      let topNavJSX = <div>
        <div>Street Food</div>
        <div>Regiter Truck</div>
      </div>
    }

    return(
      <div className='topNavContainer'>
        {topNavJSX}
      </div>
    )
}

export default TopNav
