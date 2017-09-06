import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mtg from 'mtgsdk';


class Card extends Component {
    state = {
        card: undefined
    }

    componentWillMount() {
        mtg.card.find(3)
        .then(result => {
            console.log(result.card) // "Black Lotus"
            this.setState({card: result.card});
        })
    }

    render() {
        if (!this.state.card) {
            return <div>
                        Loading Card...
                    </div>
        }
        return <div>
            {this.state.card.name} 
            </div>
    }
}

Card.propTypes = {
    classes: PropTypes.number,
};

export default Card;