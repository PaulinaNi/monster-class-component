import { Component } from 'react'
import Card from '../card/card.component'
export default class CardList extends Component {

 render() {
  const monsters = this.props.monsters
  return (
   <div className='monsterList'>
    {monsters.map(monster => <Card key={monster.id} monster={monster} />)}
   </div>
  )
 }
}