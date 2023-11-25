import GoodsCard from "./GoodsCard";

import apple from "./images/apple.png";
import pear from "./images/pear.png";
import grapes from "./images/grapes.png";
import orange from "./images/orange.png";
import peach from "./images/peach.png";
import banana from "./images/banana.png";

const Goods = () => {
  const GOODS = [
    {
      name: "Apple",
      price: 10,
      image: apple,
    },
    {
      name: "Pear",
      price: 20,
      image: pear,
    },
    {
      name: "Grapes",
      price: 30,
      image: grapes,
    },
    {
      name: "Orange",
      price: 40,
      image: orange,
    },
    {
      name: "Peach",
      price: 50,
      image: peach,
    },
    {
      name: "Banana",
      price: 60,
      image: banana,
    },
  ];

  return (
    <div className="goods">
      {GOODS.map((el) => (
        <GoodsCard
          name={el.name}
          price={el.price}
          image={el.image}
          key={el.name}
        />
      ))}
    </div>
  );
};

export default Goods;
