import React, { useState, useEffect } from 'react'
import { Text, FlatList, View, TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient"

import Icon from "react-native-vector-icons/MaterialIcons"

import styles from "../styles"

import getRealm from "../../services/realm"

function Lista({ navigation }) {
  const [ lista, setLista ] = useState([])
  const [ update, setUpdate ] = useState(0)

  if(navigation.getParam("finished") == true) {
    setUpdate(update + 1)
  }

  useEffect(() => {
    async function loadLista() {
      const realm = await getRealm()

      const data = realm.objects("Lista").sorted("id", true)
      setLista(data)
    }

    loadLista()
  }, [update])

  

  return (
    <>
    <LinearGradient colors={["#27ae60", "#2ecc98"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator = {false}
        style = {{width: "90%", alignSelf: "center"}}
        data={lista}
        keyExtractor={item => String(item.id)}
        renderItem = {({ item }) => (
          <View style={styles.containerItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.containerInfo}>
              <Text style={styles.itemWeight}>Peso(kg/L): {item.weight}</Text>
              <Text style={styles.itemValue}>R${Number(item.value).toFixed(2)}</Text>
            </View>

            <View style={styles.containerBtn}>
              <TouchableOpacity
                onPress = { async () => {
                  const data = {
                    id: item.id,
                    name: item.name,
                    weight: item.weight,
                    value: item.value,
                    car: item.car + 1
                  }

                  const realm = await getRealm()

                  realm.write(() => {
                    realm.create("Lista", data, "modified")
                  })
                }}
              ><Icon name="add-shopping-cart" color="#fff" size={30} /></TouchableOpacity>

              <TouchableOpacity
                onPress = {() => {
                  const data = {
                    id: item.id,
                    name: item.name,
                    weight: item.weight,
                    value: Number(item.value).toFixed(2),
                    car: item.car
                  }
                  navigation.navigate("EditarItem", data)
                }}
              ><Icon name="create" color="#0984e3" size={30} /></TouchableOpacity>

              <TouchableOpacity
                onPress = { async () => {
                  const realm = await getRealm()

                  const itemId = item.id

                  realm.write(() => { 
                    let item = realm.objects("Lista").filtered("id = " + itemId)

                    realm.delete(item)
                  })

                  setUpdate(update + 1)
                }}
              ><Icon name="delete-forever" color="#d63031" size={30} /></TouchableOpacity>       
            </View>
          </View>
        )}
      />
    </LinearGradient>
    <TouchableOpacity
      style = {styles.btnShopping}
      onPress = {() => {
        navigation.navigate("Carrinho")
      }}
    ><Icon name="shopping-cart" color="#FFF" size={30} /></TouchableOpacity>

    <TouchableOpacity
      style = {styles.btnAddList}
      onPress = {() => {
        navigation.navigate("AddLista")
      }}
    ><Icon name="add" color="#FFF" size={30} /></TouchableOpacity>
    </>
  )
}

export default Lista