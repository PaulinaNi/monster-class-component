import { Component } from 'react'

export default class CardList extends Component {

 render() {
  const monsters = this.props.monsters

  return (
   <div>
    {monsters.map(monster => <h3 key={monster.id}>{monster.name}</h3>)}
   </div>
  )
 }
}