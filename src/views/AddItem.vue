<template>
  <div class="holder">
    <h1>Add Items:</h1>
    <div class="fail" v-if="fail">
      <h2>Couldn't add item, try again, ensure all field are filled</h2>
    </div>

    <div class="success" v-if="success">
      <h2>Item Added Successfully!</h2>
    </div>
    <div class="inputBlock">
      <div class="labels">
        <label>Item Name:</label>
        <label>Item Weight:</label>
        <label> Item Value:</label>
        <label for=""> Image Link (Optional):</label>
      </div>
      <div class="inputs">
        <input type="text" name="" value="" v-model="name" />
        <input type="number" name="" value="" v-model="weight" />
        <input type="number" name="" value="" v-model="value" />
        <input type="url" name="" value="" v-model="imageLink" />
      </div>
    </div>

    <button v-on:click="addToCart()">Add Item</button>
    <hr />

    <ItemView :products="this.products"></ItemView>
    <Footer></Footer>
  </div>
</template>

<script type="text/javascript">
import ItemView from "../components/ItemView.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "AddItem",
  data() {
    return {
      name: "",
      weight: "",
      value: "",
      imageLink: "",
      fail: false,
      success: false
    };
  },
  methods: {
    addToCart: function() {
      if (this.name === "" || this.weight === "" || this.value === "") {
        this.fail = true;
        this.success = false;
        return;
      }
      //add to Cart
      let item = {
        name: this.name,
        weight: parseInt(this.weight),
        value: parseInt(this.value),
        imageLink: this.imageLink
      };

      if (this.imageLink === "") {
        item.imageLink =
          "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
      }
      this.$root.$data.products.push(item);
      this.fail = false;
      this.success = true;
      this.name = "";
      this.weight = "";
      this.value = "";
      this.imageLink = "";
    }
  },
  components: {
    ItemView,
    Footer
  },
  computed: {
    products: function() {
      return this.$root.$data.products;
    }
  }
};
</script>

<style media="screen">
* {
  color: FFFFF;
  font-size: 30px;
}

.inputBlock {
  display: flex;
  justify-content: center;
}

.labels {
  width: 50%;
}

.inputs {
  display: block;
}

label {
  display: block;
  font-size: 30px;
  margin-bottom: 35px;
}
label:first-of-type {
  margin-top: 20px;
}

.success h2 {
  color: #00ff00;
}

.fail h2 {
  color: #ff0000;
}

input {
  width: 65%;
  height: 30px;
  margin: 20px 20px;
  background-color: #ffffff;
  border-radius: 5px;
}
</style>
