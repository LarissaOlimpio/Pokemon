import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <Image src="/assets/pokeball.png" width={70} height={70} />
        <h1>Pokedex</h1>
      </div>
    </>
  );
}
