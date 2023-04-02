import "./Home.css";
import { useEffect, useState } from "react";
import DrinkCard from "../../components/grid/DrinkCard";
import { FaSearch } from "react-icons/fa";


const url =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

function Home() {
  const [drinks, setDrinks] = useState([]);
  const [searchvalue, setSearchValue] = useState();

  const fetchDrinks = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setDrinks(data.drinks);
    console.log(drinks);
  };

  useEffect(() => {
    fetchDrinks(url);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchvalue) {
      fetchDrinks(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchvalue}`
      );
    } else {
      fetchDrinks(url);
    }
    setSearchValue("");
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <div className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">           
            <input
              type="text"
              placeholder="Search for your favorite cocktail ..."
              onChange={handleChange}
              value={searchvalue}
              />
              <button onSubmit={handleSubmit}><FaSearch/></button>
          </div>
        </form>
      </div>
      <div className="drinks-container">
        {drinks.map((drink) => (
          <DrinkCard key={drink.idDrink} data={drink} />
        ))}
      </div>
    </div>
  );
}

export default Home;
