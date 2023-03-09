import ApiRouters from "./router";
import { runningPort, allowMethods } from "./config";

const express = require("express");

const cors = require("cors");

const app = new express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const whiteList = ['http://192.168.43.186:3099']
const options = {
  origin: (origin, callback) => {
    // pass always, you can also use whiteList
    callback(null, true);
  },
  credentials: true,
  methods: allowMethods,
};

app.use(cors(options));

ApiRouters.forEach((router) => {
  app.use(router.prefix, router.route);
});

const server = app.listen(runningPort, "localhost", () => {
  const { address, port } = server.address();
  console.log("======================");
  console.log(`Server running at http://${address}:${port}`);
  console.log("======================");
});
