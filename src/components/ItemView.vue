<template>
  <div class="empty" v-if="empty">
    <h2>No Items</h2>
  </div>
  <div class="grid" v-else>
    <div class="item" v-for="item in products" v-bind:key="item.name">
      <img :src="item.imageLink" alt="" />
      <p>Name: {{ item.name }}</p>
      <p>Weight: {{ item.weight }}</p>
      <p>value: {{ item.value }}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "ItemView",
  props: {
    products: Array
  },
  computed: {
    empty: function() {
      return this.products.length === 0;
    }
  }
};
</script>

<style media="screen">
.grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.item {
  width: 20%;
  border: 2px solid blue;
  margin: 1%;
  font-size: 20px;
}

.item img {
  width: 75%;
}

.item p {
  font-size: 20px;
  margin: 5px;
  padding: 5px;
  max-width: 95%;
}
</style>
