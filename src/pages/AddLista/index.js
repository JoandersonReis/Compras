import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from "react-native-linear-gradient"

import styles from "./styles"

function App({ navigation }) {
  const [ textName, setTextName ] = useState("")
  const [ textWeight, setTextWeight ] = useState("")
  const [ textValue, setTextValue ] = useState(0)

  return (
    <LinearGradient colors={["#27ae60", "#2ecc98"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <TextInput 
        style = {styles.inputName}
        placeholder = "Digite o Nome"
        placeholderTextColor = "#DDD"
        onChangeText = {text => setTextName(text)}
      />
      <TextInput 
        style = {styles.inputWeight}
        placeholder = "Digite o Peso"
        placeholderTextColor = "#DDD"
        onChangeText = {text => setTextWeight(text)}
      />
      <TextInput
        keyboardType = "numeric" 
        style = {styles.inputValue}
        placeholder = "Digite o Preço"
        placeholderTextColor = "#DDD"
        onChangeText = {text => setTextValue(parseFloat(text))}
      />

      <TouchableOpacity
        style = {styles.btnAddList}
        onPress = {() => {
          navigation.goBack()
        }}
      ><Text style={styles.btnAddListText}>Adicionar</Text></TouchableOpacity>
    </LinearGradient>
  )
}

export default App