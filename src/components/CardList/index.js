import React, {Component} from 'react';
import mtg from 'mtgsdk';
import { Row, Col } from 'antd';


class CardList extends Component {
    state = {
        cards: []
    }

    componentWillMount() {
        mtg.card.where({pageSize: 50, random: true})
        .then((cards) => {
            let result = cards.filter( (card) => {
                return card.imageUrl !== undefined;
            });
            console.log(result);
            //remove items such that the length is a modulus of 4
            const l = result.length;
            result = result.slice(0, l - (l % 4));
            console.log(result);
            this.setState( { cards: result });
        });
    }
    render() {
        let list = this.state.cards.map((card, idx) => {
            return <Col span={6} key={idx} style={{padding: 20}} onClick={loadImag}>
                        <img src={card.imageUrl} alt={card.name} width="250px"/>
                    </Col>
        });
        return <Row gutter={20} style={{maxWidth: 1200,margin: '0 auto'}} type="flex" justify="start">{list}</Row>
    }
}

export default CardList;