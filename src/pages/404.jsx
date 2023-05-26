import Image from 'next/image';
import styles from '../styles/NotFound.module.css';
import error404 from '../../public/assets/error404.png';
import meowth from '../../public/assets/meowth.png'
export default function NotFound() {
  return (
    <div className={styles.divErrorMenssage}>
      
      <Image src={error404} alt="página não encontrada" className={styles.error404}/>
      <h2>Página não encontrada</h2>
      <p>Tem certeza de que era isso que estava procurando?</p>
      <p>
        Aguarde uns instantes e recarregue a página, ou volte para a página
        inicial.
      </p>
      <Image src={meowth} alt="Imagem do meowth" className={styles.meowthImage}/>
    </div>
  );
}
