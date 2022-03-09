import styles from "../styles/Home.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Populer Titles</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Card sx={{ minWidth: 345 }}>
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
          <Card sx={{ minWidth: 345 }}>
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