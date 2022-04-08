import styles from "../styles/Home.module.css";
import Dropdown from "./Dropdown";

const users = ["all", "a", "b", "c"];

export default function Navigation() {
  return (
    <div className={styles.navbar}>
      <Dropdown users={users} />
      <div>LOGIN</div>
    </div>
  );
}
