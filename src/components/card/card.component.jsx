export default function Card(props) {
 const { name, email, phone } = props.monster

 return (
  <div className='monsterCard'>
   <img alt={`monster ${name}`} src={`https://robohash.org/${name}?set=set3&size=180x180`} />
   <h2>{name}</h2>
   <p>{email}</p>
   <p>{phone}</p>
  </div>
 )
}