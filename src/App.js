import { Component } from 'react'
import './App.css';

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
    return (
      <div className="App">
        <h1>Our monsters</h1>
        <form>
          Search for monster:
          <label htmlFor="searchedMonster">
            <input id="searchedMonster" type="search" onChange={searchedMonsterInputHandler} value={searchedMonster}></input>
          </label>
        </form>
        {/* filter monsters by input value stored in state, make all to lower cases - no case sensitive issue while filtering*/}
        {monsters.filter(monster => monster.name.toLowerCase().includes(searchedMonster.toLowerCase())).map((monster, index, array) => <h2 key={monster.id}>{monster.name} is monster {index + 1} of {array.length}</h2>)}

      </div>
    );
  }
}

export default App;
