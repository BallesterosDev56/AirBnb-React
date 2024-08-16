import './App.css';
import { Collage } from './components/collage/Collage';
import { Header } from './components/header/Header';
import { Text } from './components/text/Text';
import { Card } from './components/card/Card';
//image
import swimmer from '../assets/images/swimmer.jpg'
import wife from '../assets/images/wife.jpg'
import bike from '../assets/images/bike.jpg'


export const App = ()=> {
  return (
    <>
      <Header></Header>
      <div className="collage-container">
        <Collage></Collage>
      </div>
      <Text></Text>

      <div className="cards-container">
        <Card image = {swimmer}></Card>
        <Card image = {wife}></Card>
        <Card image = {bike}></Card>
        <Card image = {swimmer}></Card>
      </div>
    </>
  )
}