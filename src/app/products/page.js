'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import ContactForm from './form';

export default function Page() {
  const products = [
    {
      name: 'Тепло-Стандарт',
      size: ['4,0', '4,2', '4,4', '4,6', '4,7'],
      price: {
        sedan: ['7900', '8100', '8300', '8500', '8900'],
        universal: ['7900', '8100', '8300', '8500', '8900'],
        crossover: ['8950', '9050', '9150', '9250', '9500'],
      },
      desc: 'Утепленный тент-чехол 300 гр/м',
      color: ['серебро'],
      carBody: ['Седан', 'Универсал', 'Кроссовер'],
      img: '/images/IMG_45577.png',
      imgWidth: 280,
      imgHeight: 230,
    },
    {
      name: 'Тепло-Премиум',
      size: ['4,0', '4,2', '4,4', '4,6', '4,7'],
      price: {
        sedan: ['8300', '8700', '9100', '9500', '9900'],
        universal: ['8300', '8700', '9100', '9500', '9900'],

        crossover: ['9150', '9300', '9500', '9800', '10100'],
      },
      desc: 'Утепленный тент-чехол 350 гр/м',
      color: ['серебро'],
      carBody: ['Седан', 'Универсал', 'Кроссовер'],
      img: '/images/IMG_45577.png',
      imgWidth: 280,
      imgHeight: 230,
    },
    {
      name: 'Тепло-Камуфляж',
      size: ['4,0', '4,2', '4,4', '4,6', '4,7'],
      price: {
        sedan: ['5400', '5600', '5800', '6000', '6400'],
        universal: ['5400', '5600', '5800', '6000', '6400'],
        crossover: ['6450', '6550', '6650', '6750', '7000'],
      },
      desc: 'Утепленный тент-чехол 300 гр/м',
      color: ['камуфляж'],
      carBody: ['Седан', 'Универсал', 'Кроссовер'],
      img: '/images/2.png',
      imgWidth: 300,
      imgHeight: 200,
    },
    {
      name: 'Утепленные гаражные шторы',
      size: ['Стандарт'],
      desc: 'Утепленный полог для гаража',
      color: ['серебро', 'камуфляж'],
      img: '/images/10.png',
      imgWidth: 300,
      imgHeight: 200,
    },
  ];

  let [popup, setPopup] = useState(false);
  let [currentPopup, setCurrentPopup] = useState({});
  const [finishPopup, setFinishPopup] = useState(false);

  let [selectedProductSize, setSelectedProductSize] = useState({
    'Тепло-Стандарт': '4,0',
    'Тепло-Премиум': '4,0',
    'Тепло-Камуфляж': '4,0',
    'Утепленные гаражные шторы': '-',
  });
  let [selectedProductPrice, setSelectedProductPrice] = useState({
    'Тепло-Стандарт': '7900',
    'Тепло-Премиум': '8300',
    'Тепло-Камуфляж': '5400',
    'Утепленные гаражные шторы': '-',
  });

  let [selectedProductColor, setSelectedProductColor] = useState({
    'Тепло-Стандарт': 'серебро',
    'Тепло-Премиум': 'серебро',
    'Тепло-Камуфляж': 'серебро',
    'Утепленные гаражные шторы': 'серебро',
  });

  let [selectedCarBody, setSelectedCarBody] = useState({
    'Тепло-Стандарт': 'Седан',
    'Тепло-Премиум': 'Седан',
    'Тепло-Камуфляж': 'Седан',
    'Утепленные гаражные шторы': '',
  });

  const getPrice = (name, value) => {
    const carBody = selectedCarBody[name];
    const selectedSize = value;

    // Находим продукт по имени
    const product = products.find((p) => p.name === name);

    if (product) {
      // Получаем индекс выбранного размера

      const sizeIndex = product.size.indexOf(selectedSize);

      // Проверяем, что индекс корректный
      if (sizeIndex !== -1) {
        console.log(888);
        // Получаем цену для кузова
        let currentPrice = 0;
        switch (carBody) {
          case 'Седан':
            currentPrice = product.price.sedan[sizeIndex];

            break;
          case 'Универсал':
            currentPrice = product.price.universal[sizeIndex];
            console.log(999);
            break;
          case 'Кроссовер':
            currentPrice = product.price.crossover[sizeIndex];
            break;
        }

        setSelectedProductPrice((prev) => ({
          ...prev,
          [name]: currentPrice,
        }));
      } else {
        console.log('Размер не найден');
      }
    } else {
      console.log('Продукт не найден');
    }
  };

  const handleSizeChange = (event) => {
    const { name, value } = event.target;
    setSelectedProductSize((prev) => ({
      ...prev,
      [name]: value,
    }));

  };
  // const handleColorChange = (event) => {
  //   const { name, value } = event.target;
  //   setSelectedProductColor((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleCarBodyChange = (event) => {
    const { name, value } = event.target;
    setSelectedCarBody((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  let openPopup = (currentProduct) => {
    setPopup(!popup);
    setCurrentPopup(currentProduct);
  };

  useEffect(() => {
    Object.keys(selectedProductSize).forEach((name) => {
      const size = selectedProductSize[name];
      if (size !== '-') {
        getPrice(name, size);
      }
    });
  }, [selectedProductSize, selectedCarBody]);


  return (
    <div>
      <div>
        {
          <div>
            {finishPopup && (
              <div className={styles.successPopup}>
                <button className={styles.closeButton} onClick={() => setFinishPopup(false)}>
                  &times;
                </button>
                <h1>Ваш заказ принят!</h1>
                <h2>В ближайшее время с вами свяжется наш администратор</h2>
              </div>
            )}
          </div>
        }
      </div>
      <div>
        {popup && (
          <div className={styles.modalOverlay}>
            <div className={styles.popupWrapper}>
              <div className={styles.popup}>
                <button className={styles.closeButton} onClick={() => setPopup(false)}>
                  &times;
                </button>

                <h1>Ваш заказ:</h1>
                <div className={styles.order}>
                  <Image
                    src={currentPopup.img}
                    width={currentPopup.imgWidth}
                    height={currentPopup.imgHeight}
                    alt={currentPopup.name}
                  />
                  <h2>{currentPopup.name}</h2>

                  <div className={styles.orderParams}>
                    <h3>Цвет:</h3>
                    <p>{selectedProductColor[currentPopup.name]}</p>
                  </div>

                  <div className={styles.orderParams}>
                    <h3>Размер:</h3>
                    <p>{selectedProductSize[currentPopup.name]}</p>
                  </div>
                  {currentPopup.name !== 'Утепленные гаражные шторы' && (
                    <div className={styles.orderParams}>
                      <h3>Кузов:</h3>
                      <p>{selectedCarBody[currentPopup.name]}</p>
                    </div>
                  )}
                </div>
              </div>
              <ContactForm
                size={selectedProductSize[currentPopup.name]}
                modelType={currentPopup.name}
                color={selectedProductColor[currentPopup.name]}
                setPopup={setPopup}
                setFinishPopup={setFinishPopup}
                carBody={selectedCarBody[currentPopup.name]}
              />

              <div></div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.productsWrapper}>
        {products.map((product) => (
          <div key={product.name} className={styles.products}>
            <div className={styles.product}>
              <Image
                src={product.img}
                width={product.imgWidth}
                height={product.imgHeight}
                alt={product.name}
              />
              <h2>{product.name}</h2>
              <h3>{product.desc}</h3>
              <h4>Размер</h4>
              <select
                name={product.name}
                value={selectedProductSize[product.name]}
                onChange={(e) => {
                  handleSizeChange(e);
                }}
                className={styles.option}>
                {product.size.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>

              {product.name !== 'Утепленные гаражные шторы' && <h4>Кузов</h4>}

              {product.name !== 'Утепленные гаражные шторы' && (
                <select
                  name={product.name}
                  value={selectedCarBody[product.name]}
                  onChange={(e) => {
                    handleCarBodyChange(e);
                  }}
                  className={styles.option}>
                  {product.carBody.map((carBody) => (
                    <option key={carBody} value={carBody}>
                      {carBody}
                    </option>
                  ))}
                </select>
              )}
              {product.name === 'Утепленные гаражные шторы' || product.name === 'Тепло-Камуфляж' ? (
                <b>Под заказ</b>
              ) : (
                <b>{selectedProductPrice[product.name]}₽</b>
              )}

              <button onClick={() => openPopup(product)}>КУПИТЬ</button>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.desc}>
        Основным направлением магазина являются товары для сохранения тепла автомобилей, гаражей и
        других помещений. У нас в продаже портативные гаражи (утепленные тенты-чехлы), утепленные
        гаражные шторы. Мы выбрали оптимальную толщину наших изделий, которая позволяет сочетать
        хорошие термоизоляционные свойства с весом изделий.
      </p>
      <p className={styles.desc}>
        Портативные гаражи за несколько лет использования хорошо зарекомендовали себя как в районах
        с умеренными зимними температурами, такими как Забайкальский край, Амурская область,
        Красноярский край, Иркутская область, Сахалин, Камчатка и т. д, так и в районах Крайнего
        Севера, северных районах Сибири и Дальнего Востока, где зимние значения температур могут
        достигать — 50 градусов и ниже.{' '}
      </p>
      <p className={styles.desc}>
        Так же возможен отшив пологов, чехлов, штор из простеганного утепленного материала по
        размерам заказчика. Все представленные простёганные изделия или есть в наличии и
        отправляются покупателям в течении 1−3-х дней после оплаты заказа. Или, в случае если в
        наличии нет товара с необходимыми характеристиками, производятся и отправляются покупателям
        в согласованные сроки напрямую с фабрики Китая.
      </p>
    </div>
  );
}
