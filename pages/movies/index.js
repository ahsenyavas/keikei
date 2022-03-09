import Styles from "./index.module.scss";
import Movie from "../../src/components/movie";
import { useEffect, useState } from "react";

const FEATURED_API = "https://api.themoviedb.org/3/movie/550?api_key=acc13e4b9d230b1c97ff5fdb44fb6b82";


export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = async (API) => {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    setMovies(data);
  };
  return (
    <div className={Styles.container}>
      
          <Movie />
     
    </div>
  );
}
