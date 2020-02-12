import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import Lista from "./pages/Lista"
import Carrinho from "./pages/Carrinho"
import AddLista from "./pages/AddLista"
import EditarItem from "./pages/EditarItem"

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
  AddLista: {
    screen: AddLista,
    navigationOptions: {
      title: "Adicionar Item",
      headerStyle:{
        backgroundColor: "#10ac84",
      }
    }
  },
  EditarItem: {
    screen: EditarItem,
    navigationOptions: {
      title: "Editar Item",
      headerStyle:{
        backgroundColor: "#2e86de",
      }
    }
  }
},{
  defaultNavigationOptions: {   
    headerTitleAlign: "center",
    headerTintColor: "#FFF"
  }
}))
