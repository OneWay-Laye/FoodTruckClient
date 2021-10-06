import React, {Fragment, useState} from 'react'

import style from './TopNav.scss'

const TopNav = (props) => {
    const [user, setUser] = useState(null)

    let topNavJSX = <Fragment>
      <div className='everyTopNav logo'><a href='#'>Street Food</a></div>
      <div className='tNLinks'>
        <div className='everyTopNav links'><a href='#'>SignIn</a></div>
        <div className='everyTopNav links'><a href='#'>Regiter Truck</a></div>
        <div className='everyTopNav links'><a href='#'>Sign Up</a></div>
      </div>
      </Fragment>

    if (user !== null) {
      let topNavJSX = <Fragment>
        <div className='everyTopNav logo'><a href='#'>Street Food</a></div>
        <div className='tNLinks'>
          <div className='everyTopNav links'><a href='#'>Regiter Truck</a></div>
        </div>
      </Fragment>
    }

    return(
      <div className='topNavContainer'>
        {topNavJSX}
      </div>
    )
  }
export default TopNav
