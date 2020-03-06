import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from "react-native-linear-gradient"

import styles from "./styles"

import getRealm from "../../services/realm"

function App({ navigation }) {
  const [ textName, setTextName ] = useState(navigation.getParam("name"))
  const [ textWeight, setTextWeight ] = useState(navigation.getParam("weight"))
  const [ textValue, setTextValue ] = useState(navigation.getParam("value"))

  async function handleEditItem() {
    const data = {
      id: navigation.getParam("id"),
      name: textName,
      weight: textWeight,
      value: Number(textValue),
      car: navigation.getParam("car")
    }

    const realm = await getRealm()

    realm.write(() => {
      realm.create("Lista", data, "all")
    })

    navigation.goBack()
  }

  return (
    <LinearGradient colors={["#0abde3", "#48dbfb"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <TextInput 
        style = {styles.inputName}
        placeholder = "Digite o Nome"
        defaultValue={navigation.getParam("name")}
        placeholderTextColor = "#DDD"
        onChangeText = {text => setTextName(text)}
      />
      <TextInput 
        style = {styles.inputWeight}
        placeholder = "Digite o Peso"
        defaultValue={navigation.getParam("weight")}
        placeholderTextColor = "#DDD"
        onChangeText = {text => setTextWeight(text)}
      />
      <TextInput
        keyboardType = "numeric" 
        style = {styles.inputValue}
        defaultValue={navigation.getParam("value")}
        placeholder = "Digite o Preço"
        placeholderTextColor = "#DDD"
        onChangeText = {text => setTextValue(parseFloat(text))}
      />

      <TouchableOpacity
        style = {styles.btnEditList}
        onPress = {handleEditItem}
      ><Text style={styles.btnEditListText}>Editar</Text></TouchableOpacity>
    </LinearGradient>
  )
}

export default App