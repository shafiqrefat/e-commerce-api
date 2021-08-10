import React from "react";
import { Card } from "react-bootstrap";

const Cards = (props) => {
  console.log(props.items.title_en);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.items.photo} />
      <Card.Body>
        <Card.Title className="text-center" mb-2>
          {props.items.title_en}
        </Card.Title>
        <Card.Text className="text-center">{props.items.value_en}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
