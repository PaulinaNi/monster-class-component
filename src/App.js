import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component';

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchedMonster, setSearchedMonster] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setMonsters(data)
      )
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    const updatedFilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchedMonster.toLowerCase()))
    setFilteredMonsters(updatedFilteredMonsters)
  }, [monsters, searchedMonster])

  const searchedMonsterInputHandler = (e) => setSearchedMonster(e.target.value)

  return (
    <div className="App">
      <h1>Our monsters</h1>
      <SearchBox onChangeHandler={searchedMonsterInputHandler} valueControler={searchedMonster} className="searchBox" htmlForID="searchedMonster" searchFor="monster" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
