<template>
  <div class="about">
    <h1>{{ titulo }}</h1>
    <ParentComponent />
  </div>
</template>

<script>
import ParentComponent from "@/components/ParentComponent.vue";

export default {
  name: "AboutView",
  data() {
    return {
      titulo: "Comunicación entre componentes",
    };
  },
  components: {
    ParentComponent,
  },
};
</script>
