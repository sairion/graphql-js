var schema = new GraphQL.GraphQLSchema({
  query: new GraphQL.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQL.GraphQLString,
        resolve: function resolve() {
          return 'world';
        }
      }
    }
  })
});

var query = '{ hello }';
print(schema, query);

//new Promise(function(resolve, reject){

  //  setTimeout(resolve, 100);

//});

GraphQL.graphql(schema, query)
