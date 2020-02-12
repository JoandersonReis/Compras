import React from 'react'
import { Text, FlatList, View, TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient"

import Icon from "react-native-vector-icons/MaterialIcons"

import styles from "../styles"

function Lista({ navigation }) {
  return (
    <>
    <LinearGradient colors={["#27ae60", "#2ecc98"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator = {false}
        style = {{width: "90%", alignSelf: "center"}}
        data={[
          {
            id: "0",
            nome: "Arroz",
            peso: 1,
            valor: 3.00
          },
          {
            id: "1",
            nome: "Feijão",
            peso: 1,
            valor: 5.30
          },
          {
            id: "2",
            nome: "Macarrão",
            peso: 1,
            valor: 3.50
          },
          {
            id: "3",
            nome: "Pasta de dente",
            peso: 0.2,
            valor: 2.20
          },
          {
            id: "4",
            nome: "Café Maratá",
            peso: 0.4,
            valor: 3.00
          }
        ]}
        keyExtractor={item => item.id}
        renderItem = {({ item }) => (
          <View style={styles.containerItem}>
            <Text style={styles.itemName}>{item.nome}</Text>
            <View style={styles.containerInfo}>
              <Text style={styles.itemWeight}>Peso(kg/L): {item.peso}</Text>
              <Text style={styles.itemValue}>R${item.valor.toFixed(2)}</Text>
            </View>

            <View style={styles.containerBtn}>
              <TouchableOpacity
                onPress = {() => {}}
              ><Icon name="add-shopping-cart" color="#fff" size={30} /></TouchableOpacity>

              <TouchableOpacity
                onPress = {() => {
                  navigation.navigate("EditarItem")
                }}
              ><Icon name="create" color="#0984e3" size={30} /></TouchableOpacity>

              <TouchableOpacity
                onPress = {() => {}}
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