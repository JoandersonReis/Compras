import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import Lista from "./pages/Lista"
import Carrinho from "./pages/Carrinho"
import Icon from "react-native-vector-icons/MaterialIcons"

export default createAppContainer(createStackNavigator({
  Lista: {
    screen: Lista,
    navigationOptions: {
      headerStyle:{
        backgroundColor: "#27ae60",
      }
    }
  },
  Carrinho: {
    screen: Carrinho,
    navigationOptions: {
      headerStyle:{
        backgroundColor: "#2ecc98",
      }
    }
  },
},{
  defaultNavigationOptions: {   
    headerTitleAlign: "center",
    headerTintColor: "#FFF"
  }
}))
