const graphql = require("graphql");

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql

const UserType = new GraphQLObjectType({
    name:'User',
    description:'docs for user object',
    fields: ()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        age:{type:GraphQLInt}})
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description:'desc',
    fields:{
        user: {
            type: UserType,
            args: {id: { type:GraphQLString}},
            resolve(parent, args){
                return {}
            }
        }
}})

module.exports = new GraphQLSchema({
    query:RootQuery
})
