<template>
  <div class="childComponent">
    <h3>Soy el ChileComponent.vue</h3>
    <input v-model="inputText" placeholder="Escribe algo" />
    <button @click="sendText">Enviar</button>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    sendText() {
      this.$emit("send-text", this.inputText);
      this.inputText = "";
    },
  },
};
</script>

<style>
.childComponent {
  border: 1px solid blue;
}
</style>
