import React from 'react';
import Counter from '../../components/counter';

// props = { max: Int }
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment() {
        const { max } = this.props;
        this.setState(state => {
            if (state.count >= max) return;
            return { count: state.count + 1 };
        });
    }

    decrement() {
        this.setState(state => ({ count: state.count - 1 }));
    }

    reset() {
        this.setState({ count: 0 });
    }

    render() {
        return <Counter
            increment={this.increment.bind(this)}
            reset={this.reset.bind(this)}
            decrement={this.decrement.bind(this)}
            value={this.state.count}
        />;
    }
};