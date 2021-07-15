import React from 'react'
import { Route } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'

import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ProfileSetup from './pages/ProfileSetUp'
import Error from './components/Error'
import AddItem from './pages/AddItem'
import About from './pages/About'
import MyItems from './pages/MyItems'
import ItemListing from './components/ItemListing'

// import { cacheUser } from './auth-utils'

export default function App () {
//   cacheUser(useAuth0)
  console.log('this is App.jsx')
  return (
    <>
      <Error />
      <Header />
      <main className='container'>
        <Route exact path='/' component={Home} />
        <Route path='/' component={ItemListing} /> {/* Show Item Listing when logged in? */}
        <Route path='/profile' component={Profile} />
        <Route path='/profile/new' component={AddItem} />
        <Route path='/profilesetup' component={ProfileSetup} />
        <Route path='/about' component={About} />
        <Route path='/myitems' component={MyItems} />

      </main>
    </>
  )
}