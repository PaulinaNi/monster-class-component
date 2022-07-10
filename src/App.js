import { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchedMonster: "",
      displayedMonsters: []
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ monsters: data, displayedMonsters: data })
      )
      .catch(e => console.log(e))
  }
  searchedMonsterInputHandler(e) {
    this.setState(state => {
      console.log()
      const newMonsterArray = this.state.monsters.filter(monster => monster.name.incluedes(e.target.value))
      return {
        ...state,
        searchedMonster: e.target.value,
        displayedMonsters: this.state.monsters.filter(monster => monster.name.includes(e.target.value))
      }
    }, () => {
      console.log(this.state.searchedMonster)
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Our monsters</h1>
        <form>
          Search for monster:
          <label htmlFor="searchedMonster">
            <input id="searchedMonster" type="text" onChange={(e) => this.searchedMonsterInputHandler(e)} value={this.state.searchedMonster}></input>
          </label>
        </form>
        {this.state.displayedMonsters.map((monster, index, array) => <h2 key={monster.id}>{monster.name} is monster {index + 1} of {array.length}</h2>)}
         {/* {this.state.monsters.filter(monster => this.state.searchedMonster).map((monster, index, array) => <h2 key={monster.id}>{monster.name} is monster {index + 1} of {array.length}</h2>)} */}
      </div>
    );
  }
}

export default App;
