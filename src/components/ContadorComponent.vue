<template>
  <h1>{{ titulo }}</h1>
  <p id="textoContador">{{ contador }}</p>
  <div>
    <button id="botonAumentar" @click="aumentar">Aumentar</button>
    <button id="botonDisminuir" @click="disminuir">Disminuir</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ContadorComponent",
  data() {
    return {
      titulo: "Manejo del estado con Vuex",
    };
  },
  computed: {
    ...mapState(["contador"]),
  },
  methods: {
    ...mapMutations(["aumentarCantidad", "disminuirCantidad"]),
    aumentar() {
      this.aumentarCantidad();
    },
    disminuir() {
      this.disminuirCantidad();
    },
  },
};
</script>

<style></style>
