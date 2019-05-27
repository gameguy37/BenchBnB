import React from 'react';

class BenchIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
        const benchArray = this.props.benches.map( (bench, idx) => {
            return (
                <li key={idx}>{bench.description}</li>
            );
        })

        return (
            <ul>
                {benchArray}
            </ul>
        );
    }
}

export default BenchIndex;