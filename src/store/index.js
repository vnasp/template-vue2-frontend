import { createStore } from "vuex";

export default createStore({
  // Se define el estado inicial del contador
  state: {
    contador: 0,
  },
  getters: {},
  mutations: {
    // Se agrega mutación para aumentar el contador
    aumentarCantidad(state) {
      state.contador++;
    },
    // Se agrega mutación para disminuir el contador
    disminuirCantidad(state) {
      state.contador--;
    },
  },
  actions: {},
  modules: {},
});
