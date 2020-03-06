import React, {useState, useEffect} from 'react'
import LinearGradient from "react-native-linear-gradient"
import { FlatList, TouchableOpacity, View, Text } from "react-native"

import styles from "../styles"
import Icon from "react-native-vector-icons/MaterialIcons"

import getRealm from "../../services/realm"

function Carrinho({ navigation }) {
  const [ itemsCarrinho, setItemsCarrinho ] = useState([])
  const [ valueTotal, setValueTotal ] = useState(0)
  const [ update, setUpdate ] = useState(0)


  function somaValores(arr) {
    let tot = 0
    arr.map(item => {
      tot += Number(item.value) * item.car
    })

    setValueTotal(tot)
  }

  useEffect(()=> {
    async function loadItems() {
      const realm = await getRealm()

      const items = realm.objects("Lista").filtered("car => 1")
      let arr = Array.from(items)
      
      setItemsCarrinho(arr)

      somaValores(arr)
    }
    loadItems()
  }, [update])

  function renderItem({ item }) {
    return (
      <View style={styles.containerItem}>
        <View style={styles.containerCar}>
          <Text style={styles.textCar}>x{item.car}</Text>
        </View>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.containerInfo}>
          <Text style={styles.itemWeight}>Peso(kg/L): {item.weight}</Text>
          <Text style={styles.itemValue}>R${(Number(item.value) * item.car).toFixed(2)}</Text>
        </View>
        <TouchableOpacity
            style = {styles.removeBtn}
            onPress = { async () => {
              const data = {
                id: item.id,
                name: item.name,
                weight: item.weight,
                value: item.value,
                car: item.car - 1
              }

              const realm = await getRealm()

              realm.write(() => {
                realm.create("Lista", data, "modified")
              })

              setUpdate(update + 1)
            }}
        ><Icon name="delete-forever" color="#FFF" size={30} /></TouchableOpacity>
      </View>
    )
  }

  return (
    <LinearGradient colors={["#2ecc98", "#22a6b3"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator = {false}
        style = {{width: "90%", alignSelf: "center"}} 
        data={itemsCarrinho}
        keyExtractor = {item => String(item.id)}
        renderItem = {renderItem}
      />
      <TouchableOpacity
        style={styles.finishShopBtn}
        onPress = {async () => {
          const realm = await getRealm()

          itemsCarrinho.map(item => {
            let { id } = item
            
            let data = {
              id: id, name: item.name, weight: item.weight, value: item.value, car: 0
            }
            realm.write(() => {
              realm.create("Lista", data, "modified")
            })
          })

          navigation.goBack()
        }}
      ><Text style={styles.finishShopText}>Finalizar Compra R${valueTotal.toFixed(2)}</Text></TouchableOpacity>
    </LinearGradient>
  )
}

export default Carrinho