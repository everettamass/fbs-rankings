import styles from './Home.module.css';
import years from '../data/rankings.json';

export default function Home() {
  console.log('YEARS', years);

  return (
    <div className={styles.home}>
      <h1>FBS Rankings</h1>
    </div>
  );
}
