import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./styles.css";
import "./App.css";

const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState("");
  const [monsterNames, setmonsterNames] = useState([]);
  const [filterMonsters, setfilterMonsters] = useState(monsterNames);
  /*   const [stringField, setStringField] = useState(""); */

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setmonsterNames(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsterNames.filter((mon) => {
      return mon.name.toLocaleLowerCase().includes(searchField);
    });

    setfilterMonsters(newFilteredMonsters);
    console.log("firing");
  }, [monsterNames, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  /* const onStringChange = (event) => {
    setStringField(event.target.value);
  }; */

  return (
    <div className="App">
      <h1 className="title"> Monster Cards </h1>
      <SearchBox
        className={"monsters-search-box"}
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      {/* <SearchBox
        onChangeHandler={onStringChange}
        placeholder="String Changed"
      /> */}
      <CardList monsters={filterMonsters} />
    </div>
  );
};
export default App;
/** 

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsterNames: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState(() => {
          return { monsterNames: users };
        });
      });
  }
  onChangeSearch = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };
  render() {
    const { monsterNames, searchString } = this.state;
    const { onChangeSearch } = this;
    const filterMonsters = monsterNames.filter((mons) => {
      return mons.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <h1 className="title"> Monster Cards </h1>
        <SearchBox
          className={"monsters-search-box"}
          onChangeHandler={onChangeSearch}
          placeholder="Search Monsters"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}*/
