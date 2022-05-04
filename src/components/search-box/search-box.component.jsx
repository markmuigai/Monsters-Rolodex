import './search-box.styles.css'

const SearchBox = ({onChangeHandler}) => (
  <input
    type="search"
    className='search-box'
    placeholder='Search Monsters'
    onChange={onChangeHandler}
  />
)


export default SearchBox;