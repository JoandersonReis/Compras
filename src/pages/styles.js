import { StyleSheet } from "react-native"
import { getStatusBarHeight } from "react-native-status-bar-height"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(true),
    justifyContent: "center",
    alignItems: "center"
  },
  
  containerItem: {
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FFF"
  },

  itemName: {
    fontSize: 30,
    color: "#eee"
  },

  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%"
  },

  itemValue: {
    color: "#555",
    fontSize: 12,
    marginTop: 10,
    fontWeight: "bold",
  },

  itemWeight: {
    color: "#555",
    fontSize: 12,
    marginTop: 10,
    fontWeight: "bold"
  },

  containerBtn: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
    width: "100%"
  },

  btnShopping: {
    backgroundColor: "transparent",
    position: "absolute",
    top: -40,
    right: 10,
    zIndex: 99,
    paddingLeft: 15,
  },

  btnAddList: {
    backgroundColor: "transparent",
    position: "absolute",
    top: -40,
    left: 10,
    zIndex: 99,
    paddingRight: 20
  },

  // Page Carrinho
  containerCar: {
    position: "absolute",
    backgroundColor: "#ee5253",
    right: 10,
    padding: 10,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },

  textCar: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },

  removeBtn: {
    backgroundColor: "#d63031",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 20
  },

  finishShopBtn: {
    backgroundColor: "#2ecc98",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 70
  },

  finishShopText: {
    fontSize: 25,
    color: "#FFF"
  }
})

export default styles
