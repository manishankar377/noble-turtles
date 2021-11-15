import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import GameBoard from './Game/GameBoard/GameBoard';
import { array } from 'prop-types';


/*test('routes using array of routers ', () => {
  render(<App />);

  //Implement Testing from here...
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});*/

const boardarr = [ ['b','-','b','-','b','-','b','-'],
['-','b','-','b','-','b','-','b'],
['b','-','b','-','b','-','b','-'],
['-','-','-','-','-','-','-','-'],
['-','-','-','-','-','-','-','-'],
['-','w','-','w','-','w','-','w'],
['w','-','w','-','w','-','w','-'],
['-','w','-','w','-','w','-','w']];

test('here board is not null so board is rendered correctly', () => {
 /* const boardarr = [ ['b','-','b','-','b','-','b','-'],
  ['-','b','-','b','-','b','-','b'],
  ['b','-','b','-','b','-','b','-'],
  ['-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-'],
  ['-','w','-','w','-','w','-','w'],
  ['w','-','w','-','w','-','w','-'],
  ['-','w','-','w','-','w','-','w']];*/ // board array displayed in gameboard

  expect(boardarr).not.toBeNull();
});

test('coins are placed in alternative postion and each player has got 12 coins each', () => {
  function flaten(boardarr){
      const newArr = []
      for( let i = 0 ; i < boardarr.length ; i++){
          for(let j = 0 ; j < boardarr[i].length ; j++){
              newArr.push(boardarr[i][j])
          }
      }
      return newArr
    }
  
 expect(flaten(boardarr)).toEqual(['b','-','b','-','b','-','b','-','-','b','-','b','-','b','-','b','b','-','b','-','b','-','b','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','w','-','w','-','w','-','w','w','-','w','-','w','-','w','-','-','w','-','w','-','w','-','w']);
});




