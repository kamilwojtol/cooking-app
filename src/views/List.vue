<template>
  <div class="list-container">
    <div v-if="favourites.length > 0" class="list-wrapper">
      <ul class="list">
        <router-link
          v-for="item in favourites"
          :key="item.id"
          :to="{
            name: `Recipe`,
            params: {
              item: item,
              id: item.id,
            },
          }"
        >
          <li class="list-item">
            <img class="list-image" :src="item.image" alt="Recipe image" />
            <h3 class="list-recipe-title">{{ item.title }}</h3>
            <button
              class="list-remove"
              @click="$store.commit('removeRecipe', item)"
            >
              <social-icon
                prefix="fa"
                name="trash"
                class="list-icon"
              ></social-icon>
            </button>
          </li>
        </router-link>
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
        cursor: pointer;
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

        .list-remove {
          padding: 10px 15px;
          border: 0;
          border-radius: 15px;
          background-color: #fff;
          -webkit-box-shadow: 8px 8px 22px -11px rgba(66, 68, 90, 0.45);
          -moz-box-shadow: 8px 8px 22px -11px rgba(66, 68, 90, 0.45);
          box-shadow: 8px 8px 22px -11px rgba(66, 68, 90, 0.45);
          cursor: pointer;
          transition: 0.5s all ease-in-out;

          &:hover {
            -webkit-box-shadow: 2px 2px 22px -11px rgba(66, 68, 90, 0.1);
            -moz-box-shadow: 2px 2px 22px -11px rgba(66, 68, 90, 0.1);
            box-shadow: 2px 2px 22px -11px rgba(66, 68, 90, 0.1);
            transform: translateY(5px);
            transition: 0.5s all ease-in-out;
          }

          .list-icon {
            color: #c97373;
          }
        }
      }
    }
  }
}
</style>