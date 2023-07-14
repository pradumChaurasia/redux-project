import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import { Outlet } from 'react-router-dom'
import NavBarPanel from './NavBarPanel'

function RootLayout() {
  return (
    <>
    <Provider store={store}>

        <NavBarPanel/>
        <main>
            <Outlet/>
        </main>
    </Provider>
    </>
  )
}

export default RootLayout