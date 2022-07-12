import { Component } from 'react'
import './App.css';
import CardList from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchedMonster: "",
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ monsters: data, displayedMonsters: data })
      )
      .catch(e => console.log(e))
  }
  searchedMonsterInputHandler = (e) => {
    this.setState(state => {
      return {
        ...state,
        searchedMonster: e.target.value,
      }
    })
  }


  render() {
    const { searchedMonsterInputHandler } = this
    const { monsters, searchedMonster } = this.state

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchedMonster.toLowerCase()))

    return (
      <div className="App">
        <h1>Our monsters</h1>
        <SearchBox onChangeHandler={searchedMonsterInputHandler} valueControler={searchedMonster} className="searchBox" htmlForID="searchedMonster" searchFor="monster" />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
