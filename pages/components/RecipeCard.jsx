import styles from "../../styles/RecipeCard.module.css";

export default function RecipeCard(props) {
  return (
    <div className={styles.card}>
      <h2>{props.title}</h2>
      <div>
        Recommended by: <br /> <b>{props.submitter}</b>
      </div>
    </div>
  );
}
