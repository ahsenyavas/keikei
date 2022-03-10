import styles from "../styles/Home.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Populer Titles</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Card >
            <CardMedia
              component="img"
              height="300"
              image="images/movie.png"
              alt="movie"
            />
            <Link href="/series">
              <CardActions>
                <Button size="small">Populer Series</Button>
              </CardActions>
            </Link>
          </Card>
        </div>
        <div className={styles.card}>
          <Card >
            <CardMedia
              component="img"
              height="300"
              image="images/movie.png"
              alt="movie"
            />
            <Link href="/movies">
            <CardActions>
              <Button size="small">Populer Movies</Button>
            </CardActions>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
