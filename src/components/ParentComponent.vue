<template>
  <div class="parentComponent">
    <h3>Soy el ParentComponent.vue</h3>
    <ChildComponent @send-text="displayText" />
    <p>Texto: {{ text }}</p>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    displayText(text) {
      this.text = text;
    },
  },
};
</script>

<style scoped>
.parentComponent {
  border: 1px solid red;
  padding: 1rem;
}
</style>
