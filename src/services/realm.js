import Realm from "realm"

import ListaSchema from "../schemas/ListaSchema"

export default function getRealm() {
  return Realm.open({
    schema: [ListaSchema]
  })
}
