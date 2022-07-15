import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component';

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchedMonster, setSearchedMonster] = useState('')

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setMonsters(data)
      )
      .catch(e => console.log(e))
  }, [])

  const searchedMonsterInputHandler = (e) => setSearchedMonster(e.target.value)


  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchedMonster.toLowerCase()))

  return (
    <div className="App">
      <h1>Our monsters</h1>
      <SearchBox onChangeHandler={searchedMonsterInputHandler} valueControler={searchedMonster} className="searchBox" htmlForID="searchedMonster" searchFor="monster" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
