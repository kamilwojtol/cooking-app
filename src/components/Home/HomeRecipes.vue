<template>
  <p>{{ this.recipe.title }}</p>
  <img :src="this.recipe.image" alt="Tasty food" />
  <p>Ingredients</p>
  <ul>
    <li v-for="item in recipe.extendedIngredients" :key="item.id">
      <p>{{ item.originalString }}</p>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      recipe: [],
    };
  },
  methods: {
    getRandomRecipes() {
      axios
        .get(
          "https://api.spoonacular.com/recipes/random?apiKey=2a554d8ba47b48efa3545bdc781c3e1f"
        )
        .then((response) => {
          if (response.status == 200) {
            this.recipe = response.data.recipes[0];
            console.log(this.recipe);
          }
        });
    },
  },
  mounted() {
    this.getRandomRecipes();
  },
};
</script>

<style lang="scss" scoped>
</style>