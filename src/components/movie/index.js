import Styles from "./index.module.scss";

const IMG_API = "https://image.tmdb.org/t/p/w500";

export default function Movie({ title, poster_path }) {
  return (
    <div className={Styles.movie}>
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
