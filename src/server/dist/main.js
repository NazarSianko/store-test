"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var schema_1 = __importDefault(require("./schema"));
var resolvers_1 = __importDefault(require("./resolvers"));
var server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default
});
/*server.listen()
.then(() => {
    
    return server.listen({port: process.env.PORT || 4000})
})
.then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});*/
server.listen({ port: process.env.PORT || 3000 }).then(function (_a) {
    var url = _a.url;
    console.log("\n      \uD83D\uDE80  Server is ready at ".concat(url, "\n      \n    "));
});
