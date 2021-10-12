import React, { useState } from 'react'
import { Route } from 'react-router-dom'

// This is where I will be importing components necssary for the application
import Home from './Components/Home/Home'
import TopNav from './Components/TopNav/TopNav'
import SignIn from './Components/SignIn/SignIn'

function App() {
  const [user, setUser] = useState()

  return (
    <div className="App">

      <TopNav/>
      <Route exact path='/home' user={user} render={() => (
        <Home user={user} />
      )} />
      <Route exact path='/signin' user={user} render={() => (  
        <SignIn setUser={setUser}/>
      )} />

    </div>
  );
}

export default App;
