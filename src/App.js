import { useState } from "react";
import './App.css';
// import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  // Initialize local state
  const [ searchField, setSearchField] = useState();
  const [ monsters, setMonsters ] = useState();

  console.log(searchField)

  const onSearchChange = (event) => {
    // Get new Value
    const searchFieldString = event.target.value.toLocaleLowerCase()

    // set state
    setSearchField(searchFieldString)
  }

  // HTML to render
  return (
    <SearchBox
      onChangeHandler = { onSearchChange }
    />
  )
}

// class App extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }
//
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       }))
//   }
//
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//
//     this.setState(() => {
//       return { searchField }
//     })
//   }
//
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     });
//
//     return (
//       <div className="App">
//         <SearchBox onChangeHandler={ onSearchChange }/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
