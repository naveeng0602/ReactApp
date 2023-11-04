import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header />
      <View>
        {children}
      </View>
      <Footer />
    </>
  )
}

export default Layout