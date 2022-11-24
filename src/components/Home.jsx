import styles from './Home.module.css';
import teams from '../data/teams.json';
import rankings from '../data/rankings.json';

function buildTeam(key) {
  const team = teams[key];

  return (
    <div key={key} className={styles.team}>
      {team?.name}
    </div>
  );
}

function buildWeek(week) {
  const keys = week.rankings;

  return (
    <div className={styles.week}> 
      <div>
        {`Week ${week.index}`}
      </div>
      {keys.map((key) => buildTeam(key))}
    </div>
  );
}

export default function Home() {
  const weeks = rankings.weeks;
  console.log('RANKINGS', rankings);
  console.log('TEAMS', teams);

  return (
    <div className={styles.home}>
      <h1>FBS Rankings</h1>
      <div className={styles.weeks}>
        {weeks.map((week) => buildWeek(week))}
      </div>
    </div>
  );
}
