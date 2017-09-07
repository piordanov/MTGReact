import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mtg from 'mtgsdk';
import { Row, Col, Card } from 'antd';

class MTGCard extends Component {
    state = {
        card: this.props.card
    }

    render() {
        return (<img src={this.state.card.imageUrl} alt={this.state.card.name}/>);
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired,
};

export default MTGCard;