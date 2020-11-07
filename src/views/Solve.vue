<template>
  <div class="resultsHolder">
    <div class="inputHolderSolve">
      <p>Max Weight:</p>
      <input type="number" placeholder="10" value="" v-model="maxWeight" />
    </div>
    <button v-on:click="solve()">Solve</button>

    <div class="solvedHolder" v-if="solved">
      <div v-if="nonEmpty">
        <ItemView :products="this.results"></ItemView>
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
      //solve thing, set solved to true and set results
    }
  },
  data: function() {
    return {
      maxWeight: "",
      results: [],
      solved: false
    };
  },
  computed: {
    nonEmpty: function() {
      return this.results.length != 0;
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
</style>
