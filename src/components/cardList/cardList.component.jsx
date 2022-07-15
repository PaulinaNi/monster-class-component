import Card from '../card/card.component'

export default function CardList(props) {
 const { monsters } = props
 return (
  <div className='monsterList'>
   {monsters.map(monster => <Card key={monster.id} monster={monster} />)}
  </div>
 )
}