import Link from 'next/link';
import styles from '../styles/Button.module.css'

export default function Button({children, href}){
  return(
    <Link href={href}>
      <button className={styles.button}> {children}</button>
    </Link>
  )
}