import Styles from "./index.module.scss";
import Movie from "../../src/components/movie";
import { useEffect, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const key = "acc13e4b9d230b1c97ff5fdb44fb6b82";

const FEATURED_API = `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.asc&first_air_date_year=2010&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
const SEARCH_API = `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&query=`;

const YEAR_DESC = `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=first_air_date.desc&first_air_date_year=2010&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
const YEAR_ASC = `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=first_air_date.asc&first_air_date_year=2010&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;

export default function Series() {
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getSeries(FEATURED_API);
  }, []);

  useEffect(() => {
    if (value === 0) {
      getSeries(YEAR_DESC);
    } else if (value === 1) {
      getSeries(YEAR_ASC);
    }
  }, [value]);

  const getSeries = async (API) => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await fetch(API);
      const data = await response.json();

      console.log(data.results);
      setSeries(data.results);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (searchTerm) {
      getSeries(SEARCH_API + searchTerm);

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
  };

  return (
    <>
      {hasError && <p>Something went wrong.</p>}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div className={Styles.container}>
          <h1>Populer Series</h1>
          <div className={Styles.head}>
            <form onSubmit={handleOnSubmit}>
              <input
                type="text"
                placeholder="Search for a serie"
                className={Styles.search}
                value={searchTerm}
                onChange={handleOnChange}
              />
            </form>

            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Sort</InputLabel>
                <Select value={value} onChange={handleChange} label="Sort">
                  {menuList.map((item,index) => (
                    <MenuItem key={index} value={item.value}>{item.text}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className={Styles.movieContainer}>
            {series.map((serie) => (
              <Movie
                key={serie.id}
                title={serie.name}
                poster_path={serie.poster_path}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
