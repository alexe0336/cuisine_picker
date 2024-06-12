<template>
  <div>
    <div v-if="allCuisines.length > 1">
      <button @click="selectCuisine(0)">
        {{ allCuisines[0] }}
      </button>
      <button @click="selectCuisine(1)">
        {{ allCuisines[1] }}
      </button>
    </div>
    <div v-else>
      <h1>You picked {{ allCuisines[0] }}!</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allCuisines: ['Italian', 'Mexican', 'Chinese', 'Indian', 'Japanese', 'French', 'Thai', 'Spanish', 'Greek', 'American'],
    };
  },
  methods: {
    selectCuisine(index) {
      // Add the selected cuisine to the front of the array
      const selected = this.allCuisines[index];
      this.allCuisines.splice(0, 2);
      this.allCuisines.unshift(selected);
    }
  }
};
</script>

<style scoped>
button {
  font-size: 3em;
  margin: 30px;
  padding: 50px 50px;
}
</style>
