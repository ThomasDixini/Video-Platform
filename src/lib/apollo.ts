import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4oz4e5h1h7y01xk56ax396x/master",
    cache: new InMemoryCache(),
});