import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const free = [
  'Watch anime at home',
  'Watch a movie at home',
  'Play torchlight',
  'Build a website for fun (wow so educational)',
  'Visit a free museum exhibit',
  'Swimming',
  'Go to the gym',
  'MojoUpgrade list'
]

const lowCost = [
  'Try a new recipe to cook at home',
  'Go to an arcade (JUBEAT PLEASE)',
  'Try out a new cafe/eating place',
  'Watch a movie in the cinema',
  'Go to Haw Par Villa',
  'Go rollerblading/cycling at ECP',
  'Visit Mustafa to buy useless things'
]

const expensive = [
  'Catch a concert',
  'Go to USS',
  'Go to Adventure Cove',
  'Go to a fancy restaurant',
  'Build a new keyboard',
  'Catch omnimax show at Science Centre',
  'Go to the zoo',
  'Go ice skating',
  'Go bowling'
]

ReactDOM.render(
  <App free={free} lowCost={lowCost} expensive={expensive} />,
  document.getElementById('root')
);
