import { Component } from 'react'

export default class SearchBox extends Component {
 render() {
  const { onChangeHandler, valueControler, className, htmlForID, searchFor } = this.props

  return (
   <form className={className}>
    Search for {searchFor}:
    <label htmlFor={htmlForID}>
     <input id={htmlForID} type="search" onChange={onChangeHandler} value={valueControler}></input>
    </label>
   </form>
  )
 }
}