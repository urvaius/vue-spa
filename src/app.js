import Vue from "vue";

const app = new Vue({
  data: {
    hello: "hi there you 7"
  },
  template: '<div id="app">{{ hello }}</div>'
});

export { app };
