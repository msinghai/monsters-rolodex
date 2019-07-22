import React, { Component } from "react";

import { Card } from "../card/card.component.jsx";

class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    return this.props.monsters.map(monster => {
      return <Card key={monster.id} monster={monster} />;
    });
  }
}

export default CardList;
