import Styles from "./index.module.scss";
import Movie from "../../src/components/movie";
import { useEffect, useState } from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const key = "acc13e4b9d230b1c97ff5fdb44fb6b82";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=original_title.asc&include_adult=false&include_video=false&page=1&year=2010&with_watch_monetization_types=flatrate`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=`;

const YEAR_DESC = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
const YEAR_ASC = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&year=2010&with_watch_monetization_types=flatrate`;
const TITLE_ASC = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=original_title.asc&include_adult=false&include_video=false&page=1&year=2010&with_watch_monetization_types=flatrate`;
const TITLE_DESC = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=original_title.desc&include_adult=false&include_video=false&page=1&year=2010&with_watch_monetization_types=flatrate`;

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (value === 0) {
      getMovies(YEAR_DESC);
    } else if (value === 1) {
      getMovies(YEAR_ASC);
    } else if (value === 2) {
      getMovies(TITLE_DESC);
    } else if (value === 3) {
      getMovies(TITLE_ASC);
    }
  }, [value]);

  const getMovies = async (API) => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await fetch(API);
      const data = await response.json();

      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

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
    { value: 0, text: "Sort by year in descending order" },
    { value: 1, text: "Sort by year in ascending order" },
    { value: 2, text: "Sort by title in descending order" },
    { value: 3, text: "Sort by title in ascending order" },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <>
      {hasError && <p>Something went wrong.</p>}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div className={Styles.container}>
          <h1>Populer Movies</h1>
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
                    <MenuItem value={item.value}>{item.text}</MenuItem>
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
        </div>
      )}
    </>
  );
}
