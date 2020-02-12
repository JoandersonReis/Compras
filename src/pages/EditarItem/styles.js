import { StyleSheet } from "react-native"
import { getStatusBarHeight } from "react-native-status-bar-height"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(true),
    alignItems: "center"
  },

  inputName: {
    backgroundColor: "#FFF",
    width: "90%",
    fontSize: 20,
    borderRadius: 1,
    marginTop: 50
  },

  inputWeight: {
    backgroundColor: "#FFF",
    width: "90%",
    fontSize: 20,
    borderRadius: 1,
    marginTop: 15
  },

  inputValue: {
    backgroundColor: "#FFF",
    width: "90%",
    fontSize: 20,
    borderRadius: 1,
    marginTop: 15
  },

  btnEditList: {
    backgroundColor: "#2e86de",
    width: "90%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    borderRadius: 3,
  },

  btnEditListText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold"
  }
})

export default styles
