import Image from 'next/image';
import styles from '../styles/NotFound.module.css';
import error404 from '../../public/assets/error404.png';
import charizard from '../../public/assets/charizard.png'
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
      <div classname={styles.imageCharizard}>
        <Image className={styles.charizardImage} src={charizard} alt="imagem do pokemon charizard"/>
      </div>
     
    </div>
  );
}
