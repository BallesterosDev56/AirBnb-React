import './App.css';
import { Collage } from './components/collage/Collage';
import { Header } from './components/header/Header';
import { Text } from './components/text/Text';
import { Card } from './components/card/Card';
//image
import swimmer from '../assets/images/swimmer.jpg';
import wife from '../assets/images/wife.jpg';
import bike from '../assets/images/bike.jpg';

let cards = [
  {
    rate: 5.0,
    quantity: 6,
    image: swimmer, 
    country: 'USA',
    title: 'Life lessons with Katie Zaferes',
    price: 136,
  },
  {
    rate: 5.0,
    quantity: 30,
    image: wife,
    country: 'USA',
    title: 'Learn wedding photography',
    price: 125,
  },
  {
    rate: 4.8,
    quantity: 2,
    image: bike,
    country: 'USA',
    title: 'Group Mountain Biking',
    price: 50,
  },
  {
    rate: 5.0,
    quantity: 6,
    image: swimmer, 
    country: 'USA',
    title: 'Life lessons with Katie Zaferes',
    price: 136,
  },
];

export const App = () => {
  return (
    <>
      <Header />
      <div className="collage-container">
        <Collage />
      </div>
      <Text />

      <div className="cards-container">
        {cards.map((element, index) => (
          <Card key={index} props = {element} />
        ))}
      </div>
    </>
  );
};
