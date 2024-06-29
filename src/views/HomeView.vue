<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ContadorComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import ContadorComponent from "@/components/ContadorComponent.vue";

export default {
  name: "HomeView",
  components: {
    ContadorComponent,
  },
};
</script>
