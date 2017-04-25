import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ApolloProvider, ApolloClient, createBatchingNetworkInterface } from 'react-apollo';

const client = new ApolloClient({
    networkInterface: createBatchingNetworkInterface({
        uri: 'http://localhost:3000/api',
        connectToDevTools: true,
        batchInterval: 50,
        queryDeduplication: true,
    }),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,

    document.getElementById('root')
);
