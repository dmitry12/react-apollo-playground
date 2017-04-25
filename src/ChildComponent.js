import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getPropertiesAll } from './queries';

class ChildComponent extends Component {
    render() {
        const { data: { properties, error, loading } } = this.props;

        if (loading) {
            return <div>Loading</div>
        }

        if (error) {
            return <div>Error</div>
        }

        return (
            <p>{properties[0].id}</p>
        );
    }
}

export default
    compose(
        graphql(getPropertiesAll)
    )(ChildComponent);

