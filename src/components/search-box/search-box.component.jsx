import { Component } from "react";

import './search-box.styles.css'

class SearchBox extends Component{
  render(){
    return (
      <input
        type="search"
        className='search-box'
        placeholder='Search Monsters'
        onChange={this.props.onChangeHandler}
      />
    )
  }
}

export default SearchBox;