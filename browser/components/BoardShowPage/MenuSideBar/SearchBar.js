import React, {Component} from 'react'
import Link from '../../Link'
// Take search bar contents that already works
// make it its own component in its own file.
// the search bar needs certain content to render
// we can pass those contents from parent via props
// set props to the the state.
// export class, import class in Unarchive file
// replace search contents with our searchbar component
// then test.

const SearchBar = (props) => {
  const className = `BoardShowPage-MenuSideBar-SearchBar ${props.className||''}`
  return <span className={className}>
    <input
      type="text"
      className="BoardShowPage-MenuSideBar-ArchivedItems-SearchBox"
      placeholder="Search archive..."
      value={props.value}
      onChange={props.onChange}
    />
    </span>
  }

SearchBar.propTypes = {
//define PropTypes; value ad on change required

}

module.exports = SearchBar
