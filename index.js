var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a = require('apollo-server'), ApolloServer = _a.ApolloServer, gql = _a.gql;
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
var typeDefs = gql(__makeTemplateObject(["\n  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.\n\n  # This \"Book\" type defines the queryable fields for every book in our data source.\n  type Anime {\n    englishTitle: String\n    studio: String\n    basedOn: String\n    summary: String\n    episodes: Int\n    minutesPerEpisode: Int\n  }\n\n  # The \"Query\" type is special: it lists all of the available queries that\n  # clients can execute, along with the return type for each. In this\n  # case, the \"books\" query returns an array of zero or more Books (defined above).\n  type Query {\n    animes: [Anime]\n  }\n"], ["\n  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.\n\n  # This \"Book\" type defines the queryable fields for every book in our data source.\n  type Anime {\n    englishTitle: String\n    studio: String\n    basedOn: String\n    summary: String\n    episodes: Int\n    minutesPerEpisode: Int\n  }\n\n  # The \"Query\" type is special: it lists all of the available queries that\n  # clients can execute, along with the return type for each. In this\n  # case, the \"books\" query returns an array of zero or more Books (defined above).\n  type Query {\n    animes: [Anime]\n  }\n"]));
var animes = [
    {
        englishTitle: 'Black Clover',
        studio: 'Studio Pierrot',
        basedOn: 'Manga',
        summary: 'In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is the only one in this world without any.',
        episodes: 0,
        minutesPerEpisode: 24
    },
    {
        englishTitle: 'Jujutsu Kaisen',
        studio: 'MAPPA',
        basedOn: 'Manga',
        summary: 'Hardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death.',
        episodes: 24,
        minutesPerEpisode: 24
    },
];
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
var resolvers = {
    Query: {
        animes: function () { return animes; }
    }
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
var server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
// The `listen` method launches a web server.
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
