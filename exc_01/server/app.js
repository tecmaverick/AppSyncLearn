const express = require("express");
const graphqlHttp = require("express-graphql")
const app = express();
const schema = require("./schema/schema")

app.use("/graphql",graphqlHttp({
    graphiql:true,
    schema: schema
}))

app.listen(4000,()=>{
    console.log("listening")
})
