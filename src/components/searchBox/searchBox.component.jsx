
export default function SearchBox(props) {
 const { onChangeHandler, valueControler, className, htmlForID, searchFor } = props

 return (
  <form className={className}>
   Search for {searchFor}:
   <label htmlFor={htmlForID}>
    <input id={htmlForID} type="search" onChange={onChangeHandler} value={valueControler}></input>
   </label>
  </form>
 )
}