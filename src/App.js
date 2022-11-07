import React from 'react';
import ColorBlock from './components/colorBlock.jsx';

export default function App() {
  function generateColor() {
    let HEX_CODE = [];const data_HEX_CODE = 'ABCDEF123456789';for (let i = 0; i < 6; i++) {HEX_CODE.push(data_HEX_CODE[Math.floor((Math.random(1) * data_HEX_CODE.length))]);}HEX_CODE = HEX_CODE.join('');return HEX_CODE;
  }
  return (
    <section className='row'>
      <ColorBlock bg={generateColor()}/>
      <ColorBlock bg={generateColor()}/>
      <ColorBlock bg={generateColor()}/>
      <ColorBlock bg={generateColor()}/>
      <ColorBlock bg={generateColor()}/>
    </section>
  )
}