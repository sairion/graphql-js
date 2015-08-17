import duktape

with open('bundle.js', 'r') as GraphQLLib:
    lib = GraphQLLib.read()
    ctx = duktape.DukContext()
    ctx.eval_string(lib)

    with open('first-query.js', 'r') as GraphQLQuery:
        query = GraphQLQuery.read()
        ctx.eval_string(query)
        print ctx.get()
