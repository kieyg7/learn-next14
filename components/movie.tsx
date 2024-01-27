import Link from "next/link";
import styles from '../styles/movie.module.css'

interface IMovieProps {
  title: string;
  poster_path: string;
  id: string;
}

export default function Movie({id, poster_path, title}: IMovieProps) {
  return (
    <li className={styles.movie}>
      <Link href={`/movies/${id}`}>
        <img src={poster_path} alt={title} />
        <p>{title}</p>
      </Link>
    </li>
  )
}
