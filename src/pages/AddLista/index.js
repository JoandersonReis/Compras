import React, { useState, useEffect } from 'react'
import { Text, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from "react-native-linear-gradient"

import styles from "./styles"
import getRealm from "../../services/realm"

function App({ navigation }) {
  const [ textName, setTextName ] = useState("")
  const [ textWeight, setTextWeight ] = useState("")
  const [ textValue, setTextValue ] = useState(0)
  const [ id, setId ] = useState(0)
  const [ updateId, setUpdateId ] = useState(0)


  useEffect(() => {
    async function addId() {
      const realm = await getRealm()

      const data = realm.objects("Lista")
      let dataId = data.length

      if(dataId > 0) {
        setId(Number(data[dataId - 1].id) + 1)
      }
    }

    addId()
  }, [updateId])

  async function handleAddLista() {
    if(textName != "" && textWeight != "" && textValue != "") {
      const data = {
        id: id,
        name: textName,
        weight: textWeight,
        value: textValue,
        car: 0
      }
  
      const realm = await getRealm()
  
      realm.write(() => {
        realm.create("Lista", data)
      })
  
      setTextName("")
      setTextWeight("")
      setTextValue(0)
  
      setUpdateId(updateId + 1)
  
      navigation.navigate("Lista", {refreseh: true})
    } else {
      alert("Preencha todos os campos")
    }
  }

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
        keyboardType = "numeric"
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
        onPress = {handleAddLista}
      ><Text style={styles.btnAddListText}>Adicionar</Text></TouchableOpacity>
    </LinearGradient>
  )
}

export default App