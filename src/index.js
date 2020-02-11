import React from 'react'
import Routes from "./routes"
import { StatusBar } from "react-native"

function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Routes />
    </>
  )
}

export default App
