const graphql = require("graphql");
var _ = require("lodash")

const usersData = [
    {id:'1',name:'alpha',age:11},
    {id:'2',name:'beta',age:12},
    {id:'3',name:'gamma',age:13},
    {id:'4',name:'tango',age:14},
    {id:'5',name:'iota',age:15},
    {id:'6',name:'zota',age:16}
];

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
                return _.find(usersData,{id: args.id})
            }
        }
}})

module.exports = new GraphQLSchema({
    query:RootQuery
})
