<template>
  <div class="list-container">
    <div v-if="favourites.length > 0" class="list-wrapper">
      <ul class="list">
        <li v-for="item in favourites" :key="item.id" class="list-item">
          <img class="list-image" :src="item.image" alt="Recipe image" />
          <h3 class="list-recipe-title">{{ item.title }}</h3>
          <button
            class="list-remove"
            @click="$store.commit('removeRecipe', item)"
          >
            X
          </button>
        </li>
      </ul>
    </div>
    <div v-else class="list-wrapper">Your list is empty 😔</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favourites: this.$store.getters.recipeList,
    };
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  .list-wrapper {
    .list {
      list-style-type: none;

      .list-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        margin: 30px 10px;
        padding: 20px;
        border-radius: 25px;
        -webkit-box-shadow: 8px 8px 22px -11px rgba(66, 68, 90, 0.45);
        -moz-box-shadow: 8px 8px 22px -11px rgba(66, 68, 90, 0.45);
        box-shadow: 8px 8px 22px -11px rgba(66, 68, 90, 0.45);

        .list-image {
          height: 75px;
          width: 75px;
          object-fit: cover;
          border-radius: 50px;
        }

        .list-recipe-title {
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>