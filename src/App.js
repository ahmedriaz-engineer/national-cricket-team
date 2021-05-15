import './App.css';
import { useEffect, useState } from 'react';
import fakeData from '../src/fakeData/index'
import Player from './components/Player/Player';
import Selection from './components/Selection/Selection';

function App() {
  const [players, setPlayers] = useState([]);
  const [selection, setSelection] = useState([]);
  const select = (player) =>{
    const newSelect = [...selection, player];
    setSelection(newSelect)
  }
  // const [cart, setCart] = useState([]);
  // const newCart = [...cart, player]
  // setCart(newCart);

  useEffect(() => {
    setPlayers(fakeData)
  }, [])


  return (

    <div>
      <header><h1>National Cricket Team</h1></header>
      <div className="app">
        <div className="players">
          <h2>Players List</h2>
          {
            players.map(player => <Player player={player} select = {select} key={player.id}></Player>)
          }
        </div>
        <Selection selection = {selection} ></Selection>

      </div>
    </div>
  );
}

export default App;
