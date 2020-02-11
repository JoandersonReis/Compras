import React, {useState, useEffect} from 'react'
import LinearGradient from "react-native-linear-gradient"
import { FlatList, TouchableOpacity, View, Text } from "react-native"

import styles from "../styles"
import Icon from "react-native-vector-icons/MaterialIcons"

function Carrinho({ navigation }) {
  const [ itemsCarrinho, setItemsCarrinho ] = useState([])
  const [ valueTotal, setValueTotal ] = useState(0)

  async function loadItems(items) {
    await setItemsCarrinho(items)

    itemsCarrinho.map((item) => {
      setValueTotal(valueTotal + item.valor)
    })
  }

  useEffect(()=> {
    const data = [
      {
        id: "0",
        nome: "Macarrão",
        peso: 1,
        valor: 3.50
      },
      {
        id: "1",
        nome: "Arroz",
        peso: 1,
        valor: 3.00
      },
      {
        id: "2",
        nome: "Pasta de dente",
        peso: 0.2,
        valor: 2.20
      },
      {
        id: "3",
        nome: "Feijão",
        peso: 1,
        valor: 5.30
      },
      {
        id: "4",
        nome: "Café Maratá",
        peso: 0.4,
        valor: 3.00
      },
      {
        id: "5",
        nome: "Arroz",
        peso: 1,
        valor: 3.00
      },
    ]
    loadItems(data)
    
  }, [])

  return (
    <LinearGradient colors={["#2ecc98", "#22a6b3"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator = {false}
        style = {{width: "90%", alignSelf: "center"}} 
        data={itemsCarrinho}
        
        keyExtractor = {item => item.id}
        renderItem = {({ item }) => (
          <View style={styles.containerItem}>
            <Text style={styles.itemName}>{item.nome}</Text>
            <View style={styles.containerInfo}>
              <Text style={styles.itemWeight}>Peso(kg/L): {item.peso}</Text>
              <Text style={styles.itemValue}>R${item.valor.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
                style = {styles.removeBtn}
                onPress = {() => {}}
            ><Icon name="delete-forever" color="#FFF" size={30} /></TouchableOpacity>    
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.finishShopBtn}
        onPress = {() => {
          navigation.goBack()
        }}
      ><Text style={styles.finishShopText}>Finalizar Compra R$ {valueTotal}</Text></TouchableOpacity>
    </LinearGradient>
  )
}

export default Carrinho