import { Component } from 'react'

export default class Card extends Component {
 render() {
  const { name, email, phone } = this.props.monster
  return (
   <div className='monsterCard'>
    <img alt={`monster ${name}`} src={`https://robohash.org/${name}?set=set3&size=180x180`} />
    <h2>{name}</h2>
    <p>{email}</p>
    <p>{phone}</p>
   </div>
  )
 }
}