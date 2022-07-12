import { Component } from 'react'

export default class SearchBox extends Component {
 render() {
  const { onChangeHandler, valueControler, className, htmlForID, searchFor } = this.props

  return (
   <form>
    Search for {searchFor}:
    <label htmlFor={htmlForID}>
     <input className={className} id={htmlForID} type="search" onChange={onChangeHandler} value={valueControler}></input>
    </label>
   </form>
  )
 }
}