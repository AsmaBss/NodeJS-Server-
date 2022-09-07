const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
var cors = require("cors");
const isAuth = require("./is-auth");

//Config
const APP_PORT = 3001;

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method == "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true,
  })
);

app.get("/", function (req, res) {
  res.send("welcome !! ");
});

app.listen(APP_PORT, () => {
  console.log("App listening !");
});
