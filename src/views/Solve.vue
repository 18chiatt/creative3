<template>
  <div class="resultsHolder">
    <div class="inputHolderSolve">
      <p>Max Weight:</p>
      <input type="number" placeholder="10" value="" v-model="maxWeight" />
    </div>
    <button v-on:click="solve()">Solve</button>

    <div class="messageDisplay" v-if="hasMessage">
      {{ this.message }}
    </div>

    <div class="solvedHolder" v-if="solved">
      <div v-if="nonEmpty">
        <ItemView :products="this.solution"></ItemView>
      </div>

      <div v-else>
        <h2>Solution was no items</h2>
      </div>
    </div>

    <div class="noSolve" v-else></div>

    <Footer></Footer>
  </div>
</template>

<script type="text/javascript">
import Footer from "../components/Footer.vue";
import ItemView from "../components/ItemView.vue";
export default {
  name: "Solve",
  components: {
    Footer,
    ItemView
  },
  methods: {
    solve: function() {
      let products = this.$root.$data.products;
      if (products.length === 0) {
        this.message = "Please add items";
        return;
      }
      //solve thing, set solved to true and set results
      if (this.maxWeight === "") {
        this.message = "Please input a weight";
        return;
      }

      let weight = parseInt(this.maxWeight);
      let values = [0];
      let itemAtWeight = [[]];

      for (let i = 1; i <= weight; i++) {
        let currMaxVal = 0;
        let currBestItem = null;

        for (let item of products) {
          if (parseInt(item.weight) <= i) {
            console.log(item.value + values[i - parseInt(item.weight)]);

            if (
              parseInt(item.value) + values[i - parseInt(item.weight)] >
              parseInt(currMaxVal)
            ) {
              currMaxVal = parseInt(item.value);
              currBestItem = item;
            }
          }
        }

        if (currMaxVal == 0) {
          itemAtWeight.push([]);
          values.push(0);
          continue;
        }
        console.log(currBestItem);

        itemAtWeight.push(
          itemAtWeight[i - parseInt(currBestItem.weight)].concat([currBestItem])
        );
        values.push(
          parseInt(currMaxVal) + parseInt(values[i - currBestItem.weight])
        );
      }

      console.log(values);
      this.results = itemAtWeight[weight];
      this.solved = true;
      this.maxValue = values[weight];
      this.message = "Solved: Optimal solution has value " + this.maxValue;
      return;
    }
  },
  data: function() {
    return {
      maxWeight: "",
      results: [],
      solved: false,
      message: "",
      maxValue: 0
    };
  },
  computed: {
    nonEmpty: function() {
      return this.results.length != 0;
    },
    hasMessage: function() {
      return this.message != "";
    },
    solution: function() {
      return this.results;
    }
  }
};
</script>

<style media="screen">
.resultsHolder {
  width: 50%;
  margin: 0 auto;
}

.inputHolderSolve {
  display: flex;
  justify-content: center;
}

.inputHolderSolve p {
  display: inline;
  font-size: 20px;
  width: 25%;
  margin-top: 10px;
}

.inputHolderSolve input {
  display: inline;
  width: 25%;
}

.messageDisplay {
  margin: 25px;
}
</style>
