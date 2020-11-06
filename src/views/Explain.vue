<template>
  <div class="holder">
    <h1>Knapsack Solver</h1>
    <h2>From Wikipedia:</h2>

    <p>
      The knapsack problem is a problem in combinatorial optimization: Given a
      set of items, each with a weight and a value, determine the number of each
      item to include in a collection so that the total weight is less than or
      equal to a given limit and the total value is as large as possible. It
      derives its name from the problem faced by someone who is constrained by a
      fixed-size knapsack and must fill it with the most valuable items. The
      problem often arises in resource allocation where the decision makers have
      to choose from a set of non-divisible projects or tasks under a fixed
      budget or time constraint, respectively.
    </p>
    <img src="../assets/Knap.png" alt="" />
    <Footer></Footer>
  </div>
</template>

<style media="screen">
img {
  max-width: 100%;
  padding: 20px;
}

p {
  padding: 20px;
  font-size: 30px;
}

h1 {
  font-size: 60px;
}
.holder {
  max-width: 50%;
  margin: 0 auto;
}
</style>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "Explain",
  components: {
    Footer
  }
};
</script>
