import Styles from "./index.module.scss";
import Movie from "../../src/components/movie";
import { useEffect, useState } from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const key = "acc13e4b9d230b1c97ff5fdb44fb6b82";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=`;

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState(0);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = async (API) => {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data.results);
    setMovies(data.results);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const menuList = [
    "Sort by year in descending order",
    "Sort by year in ascending order",
    "Sort by title in descending order",
    "Sort by title in ascending order",
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
    <div className={Styles.head}>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Search for a movie"
          className={Styles.search}
          value={searchTerm}
          onChange={handleOnChange}
        />
      </form>

      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Sort</InputLabel>
          <Select value={value} onChange={handleChange}>
            {menuList.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      </div>
      <div className={Styles.movieContainer}>
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}
