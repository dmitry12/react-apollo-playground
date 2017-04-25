import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql, compose } from 'react-apollo';
import { getPropertiesId } from './queries';
import ChildComponent from './ChildComponent';

class App extends Component {
    render() {
        const { data: { properties, error, loading } } = this.props;

        if (loading) {
            return <div>Loading</div>
        }

        if (error) {
            return <div>Error</div>
        }

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>{properties[0].id}</h2>
                </div>

                <ChildComponent />
            </div>
        );
    }
}

export default
    compose(
        graphql(getPropertiesId)
    )(App);
