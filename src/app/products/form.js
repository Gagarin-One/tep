import React, { useState } from 'react';
import styles from "./page.module.css";
import Link from 'next/link';

const ContactForm = ({ size, modelType, color, setPopup, setFinishPopup,carBody }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);


  const validate = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = 'Имя обязательно';
    }
    if (!phone) {
      newErrors.phone = 'Номер телефона обязателен';
    } else if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
      newErrors.phone = 'Неверный формат номера телефона';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAgreed) {
      alert('Вы должны согласиться с лицензионным соглашением.');
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const phoneNumber = phone
        const response = await fetch('https://teplohranitel-avto.ru/api/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, phoneNumber, size, modelType, color, carBody}),
        });

        if (!response.ok) {
          throw new Error('Ошибка при отправке данных');
        }

        setName('');
        setPhone('');
        setErrors({});
        setFinishPopup(true)
      } catch (error) {
        console.error('Ошибка:', error);
      } finally {
        setLoading(false);

        setPopup(false)
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>


      <div className={styles.form}>
        <h3>Заполните все поля</h3>
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      <div className={styles.form}>
        <label htmlFor="phone">Номер телефона:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
      </div>
      <div>
      <label className={styles.checkBox}>
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
          />
           <p>Я согласен с <Link href="/agreement">обработкой персональных данных</Link></p>
           
        </label>
      </div>
      

      <button type="submit" disabled={loading} className={styles.btn}>
        {loading ? 'Отправка...' : 'ОФОРМИТЬ ЗАКАЗ'}
      </button>
    </form>
  );
};

export default ContactForm;