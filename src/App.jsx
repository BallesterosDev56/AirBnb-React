import './App.css';
import { Collage } from './components/collage/Collage';
import { Header } from './components/header/Header';
import { Text } from './components/text/Text';
import { Card } from './components/card/Card';
import { cards } from '../src/helpers/infoCards'
export const App = () => {
  return (
    <>
      <Header />
      <div className="collage-container">
        <Collage />
      </div>
      <Text />

      <div className="cards-container">
        {cards.map((element, index) => {
          return <Card key={index} props = {element}/>
        })}
      </div>
    </>
  );
};
