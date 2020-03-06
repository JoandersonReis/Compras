export default class ListaSchema {
  static schema = {
    name: "Lista",
    primaryKey: "id",
    properties: {
      id: { type: "int", indexed: true },
      name: "string",
      weight: "string",
      value: "float",
      car: "int"
    }
  }
}