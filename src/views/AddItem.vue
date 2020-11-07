<template>
  <div class="holder">
    <h1>Add Items:</h1>
    <div class="fail" v-if="fail">
      <h2>Couldn't add item, try again, ensure all field are filled</h2>
    </div>

    <div class="success" v-if="success">
      <h2>Item Added Successfully!</h2>
    </div>
    <h2>Add Items Manually</h2>
    <div class="inputBlock">
      <div class="labels">
        <label>Item Name:</label>
        <label>Item Weight:</label>
        <label> Item Value:</label>
        <label for=""> Image Link (Optional):</label>
      </div>
      <div class="inputs">
        <input type="text" placeholder="Chocolate" value="" v-model="name" />
        <input type="number" placeholder="2" value="" v-model="weight" />
        <input type="number" placeholder="7" value="" v-model="value" />
        <input
          type="url"
          placeholder="www.example.com/image.png"
          value=""
          v-model="imageLink"
        />
      </div>
    </div>

    <button v-on:click="addToCart()">Add Item</button>

    <h2>OR Import an existing set</h2>
    <div class="importer">
      <select class="" name="" v-model="set">
        <option>Agriculture</option>
        <option>Costco</option>
        <option>Best Buy</option>
      </select>
      <button v-on:click="importF()">Import</button>
    </div>

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
      success: false,
      set: ""
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
    },
    importF: function() {
      console.log(JSON.stringify(this.$root.$data.products));
      if (this.set === "Agriculture") {
        this.$root.$data.products = [
          {
            name: "Apple",
            weight: 2,
            value: 7,
            imageLink:
              "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          },
          {
            name: "Peach",
            weight: 3,
            value: 9,
            imageLink:
              "https://www.canada.ca/content/dam/phac-aspc/images/services/public-health-notices/2020/peaches.jpg"
          },
          {
            name: "Corn",
            weight: 3,
            value: 2,
            imageLink:
              "https://www.thegunnysack.com/wp-content/uploads/2018/06/Boiled-Corn-On-The-Cob-Recipe.jpg"
          },
          {
            name: "Lettuce",
            weight: 6,
            value: 2,
            imageLink:
              "https://images-na.ssl-images-amazon.com/images/I/41CGtIyWgML._AC_.jpg"
          },
          {
            name: "Tomato",
            weight: 4,
            value: 2,
            imageLink:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/330px-Tomato_je.jpg"
          },
          {
            name: "Pineapple",
            weight: 7,
            value: 14,
            imageLink:
              "https://images-na.ssl-images-amazon.com/images/I/31QtUPyu7OL._AC_UL320_SR274,320_.jpg"
          },
          {
            name: "Orange",
            weight: 4,
            value: 8,
            imageLink:
              "https://images-na.ssl-images-amazon.com/images/I/31NH9pXWfPL._AC_UL320_SR320,320_.jpg"
          }
        ];
      }

      if (this.set === "Costco") {
        this.$root.$data.products = [
          {
            name: "Tire",
            weight: 25,
            value: 200,
            imageLink:
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pile-of-tires-on-white-background-royalty-free-image-672151801-1561751929.jpg?crop=1.00xw:0.629xh;0,0.318xh&resize=980:*"
          },
          {
            name: "Pizza",
            weight: 3,
            value: 10,
            imageLink:
              "https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close-V3.webp"
          },
          {
            name: "Meatball",
            weight: 3,
            value: 10,
            imageLink:
              "https://images-gmi-pmc.edge-generalmills.com/a7d7f227-8d99-4ebd-b224-f5338c0f0749.jpg"
          },
          {
            name: "rotisserie chicken",
            weight: 3,
            value: 5,
            imageLink:
              "https://cdn.vox-cdn.com/thumbor/_Kp-zMVpDfA2Y4Cs-7PAHz8zvaI=/0x0:3000x2028/1220x813/filters:focal(1260x774:1740x1254):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62663248/53078399.jpg.0.jpg"
          },
          {
            name: "Crock Pot",
            weight: 10,
            value: 40,
            imageLink:
              "https://images-na.ssl-images-amazon.com/images/I/81-CPV4wwiL._AC_UL115_.jpg"
          },
          {
            name: "Gardettos",
            weight: 2,
            value: 17,
            imageLink:
              "https://images-na.ssl-images-amazon.com/images/I/71H5dO5QROL._AC_UL160_.jpg"
          },
          {
            name: "Golf Clubs",
            weight: 15,
            value: 50,
            imageLink:
              "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100696718-847__1&recipeName=350"
          }
        ];
      }

      if (this.set === "Best Buy") {
        this.$root.$data.products = [
          {
            name: "43 inch 4kTV",
            weight: 30,
            value: 249,
            imageLink:
              "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417302_sd.jpg;maxHeight=640;maxWidth=550"
          },
          {
            name: "Spider Man Game",
            weight: 2,
            value: 50,
            imageLink:
              "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430159_sd.jpg;maxHeight=640;maxWidth=550"
          },
          {
            name: "iPhone 12",
            weight: 1,
            value: 800,
            imageLink:
              "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/SOL-73065-iphone12_der-193431.jpg"
          },
          {
            name: "Amazon Echo Dot",
            weight: 1,
            value: 20,
            imageLink:
              "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287974_sd.jpg;maxHeight=640;maxWidth=550"
          },
          {
            name: "Note 20",
            weight: 1,
            value: 1099,
            imageLink:
              "https://images-na.ssl-images-amazon.com/images/I/81oVkYC%2BBzL._AC_UL160_.jpg"
          },
          {
            name: "Gamer Headset",
            weight: 2,
            value: 50,
            imageLink:
              "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5892/5892993_sd.jpg;maxHeight=640;maxWidth=550"
          },
          {
            name: "Canon Camera",
            weight: 4,
            value: 500,
            imageLink:
              "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323759_sd.jpg;maxHeight=640;maxWidth=550"
          }
        ];
      }

      return 3;
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

.importer select {
  margin-right: 20px;
  height: 45px;
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
