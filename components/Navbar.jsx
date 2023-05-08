import Image from "next/image";
import Link from "next/link"
import styles from "../styles/Navbar.module.css"


export default function Navbar() {
  return (
    <div className={styles.divNavBar}>
      <Image src="/assets/pokeball.png" width={30} height={30}/>
      <ul className={styles.listNavBar}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/favorites">
          <li>Favoritos</li>
        </Link>
        <Link href="/about">
          <li>Sobre</li>
        </Link>
      </ul>
    </div>
  );
}
