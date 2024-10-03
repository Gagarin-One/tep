
import styles from '@/app/page.module.css';
import Image from 'next/image';

const AdPopup = ({setIsOpenPopup}) => {
  
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.popupWrapper}>
        <div className={styles.popupHeader}>
          <Image src="/images/codelock.png" width={80} height={80}/>
          <button className={styles.closeButton} onClick={() => setIsOpenPopup(false)}>
            &times;
          </button>
        </div>

        <h2>Оформи первый заказ и получи кодовый замок в подарок!</h2>
      </div>
    </div>
  );
};
export default AdPopup