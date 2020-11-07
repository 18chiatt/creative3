<template>
  <div class="holder">
    <button v-on:click="clear()">Clear Items</button>
    <ItemView :products="this.products"></ItemView>
    <Footer></Footer>
  </div>
</template>

<script type="text/javascript">
import ItemView from "../components/ItemView.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "viewItems",
  components: {
    ItemView,
    Footer
  },
  computed: {
    products: function() {
      return this.$root.$data.products;
    }
  },
  methods: {
    clear: function() {
      this.$root.$data.products = [];
    }
  }
};
</script>
