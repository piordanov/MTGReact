import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mtg from 'mtgsdk';
import { Row, Col, Card } from 'antd';

class MTGCard extends Component {
    state = {
        card: null
    }

    componentWillMount() {
        if (this.props.match.params.id !== undefined) {
            mtg.card.find(this.props.match.params.id)
            .then((result) => {
                this.setState({card: result.card});
            });
        }

    }

    render() {
        const card = this.state.card;
        if (card === null) {
            return <div> Loading</div>
        }
        return (<div>
                    <h3>{card.name}</h3>
                    <img src={card.imageUrl} alt={card.name}/>
                </div>);
    }
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
};

export default MTGCard;