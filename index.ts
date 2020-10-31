const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Anime {
    englishTitle: String
    studio: String
    basedOn: String
    summary: String
    episodes: Int
    minutesPerEpisode: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    animes: [Anime]
  }
`;

const animes = [
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
const resolvers = {
    Query: {
      animes: () => animes,
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});