'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import ContactForm from './form';

export default function Page() {
  const products = [
    {
      name: 'Серебро-стандарт',
      desc: 'Утепленный тент-чехол 300 гр/м',
      color: ['серебро'],
      img: '/images/IMG_45577.png',
      imgWidth: 280,
      imgHeight: 230,
      inStock: false
    },
    {
      name: 'Серебро-премиум',
      carBody: {
        sedan: {
          size: ['4,0', '4,2', '4,4', '4,6', '4,7', '4,8'],
          price: ['8600', '8700', '9200', '9400', '9500', '9600'],
        },
        universal: {
          size: ['3,8', '4,0', '4,2', '4,4', '4,6', '4,7', '4,8'],
          price: ['8500', '8600', '8800', '9200', '9400', '9500', '9600'],
        },
        crossover: {
          size: ['4,0', '4,2', '4,4', '4,6', '4,7', '4,8'],
          price: ['9400', '9600', '9600', '10300', '10600', '10800'],
        },
      },
      desc: 'Утепленный тент-чехол 350 гр/м',
      color: ['серебро'],
      bodyNames: ['Седан', 'Универсал', 'Кроссовер'],
      img: '/images/IMG_45577.png',
      imgWidth: 280,
      imgHeight: 230,
    },

    {
      name: 'Серебро-камуфляж',
      carBody: {
        sedan: {
          size: ['4,0', '4,2', '4,4', '4,6', '4,7'],
          price: ['8200', '8400', '8600', '8800', '8900'],
        },
        universal: {
          size: ['3,8', '4,0', '4,2', '4,4', '4,6', '4,7'],
          price: ['7800', '8200', '8400', '8600', '8800', '8900'],
        },
        crossover: {
          size: ['4,0', '4,2', '4,4', '4,6', '4,7', '4,8'],
          price: ['8800', '9000', '9200', '9400', '9500', '9600'],
        },
      },
      desc: 'Утепленный тент-чехол 300 гр/м',
      color: ['камуфляж'],
      bodyNames: ['Седан', 'Универсал', 'Кроссовер'],
      img: '/images/2.png',
      imgWidth: 300,
      imgHeight: 200,
    },
    {
      name: 'Премиум с замком справа серебро',
      carBody: {
        universal: {
          size: ['4,4', '4,7', '4,8'],
          price: ['9400', '9700', '9800'],
        },
        crossover: {
          size: ['4,4', '4,6', '4,7', '4,8'],
          price: ['1000', '9500', '9800', '11000'],
        },
      },
      desc: 'Утепленный тент-чехол 350 гр/м',
      color: ['серебро'],
      bodyNames: ['Универсал', 'Кроссовер'],
      img: '/images/IMG_0516.png',
      imgWidth: 280,
      imgHeight: 230,
    },
    {
      name: 'Утепленные гаражные шторы',
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

  // значения по умолчанию
  let [selectedProductSize, setSelectedProductSize] = useState({
    'Серебро-стандарт': '4,0',
    'Серебро-премиум': '4,0',
    'Серебро-камуфляж': '4,0',
    'Утепленные гаражные шторы': '-',
    'Премиум с замком справа серебро': '4,4'
  });

  let [selectedProductPrice, setSelectedProductPrice] = useState({
    'Серебро-стандарт': '8300',
    'Серебро-премиум': '8600',
    'Серебро-камуфляж': '8200',
    'Утепленные гаражные шторы': '-',
    'Премиум с замком справа серебро': '9400'
  });

  let [selectedProductColor, setSelectedProductColor] = useState({
    'Серебро-стандарт': 'серебро',
    'Серебро-премиум': 'серебро',
    'Серебро-камуфляж': 'серебро',
    'Утепленные гаражные шторы': 'серебро',
    'Премиум с замком справа серебро': 'серебро'
  });

  let [selectedCarBody, setSelectedCarBody] = useState({
    'Серебро-стандарт': 'Седан',
    'Серебро-премиум': 'Седан',
    'Серебро-камуфляж': 'Седан',
    'Утепленные гаражные шторы': '',
    'Премиум с замком справа серебро': 'Универсал'
  });

  const getPrice = (name, value) => {
    const product = products.find((p) => p.name === name);
    if (!product || !product.carBody) return;

    const carBodyName = selectedCarBody[name];
    let carBodyKey = '';

    switch (carBodyName) {
      case 'Седан':
        carBodyKey = 'sedan';
        break;
      case 'Универсал':
        carBodyKey = 'universal';
        break;
      case 'Кроссовер':
        carBodyKey = 'crossover';
        break;
      default:
        carBodyKey = 'sedan';
    }


    const sizes = product.carBody[carBodyKey].size;
    const prices = product.carBody[carBodyKey].price;
    const index = sizes.indexOf(value);

    if (index !== -1) {
      setSelectedProductPrice((prev) => ({
        ...prev,
        [name]: prices[index],
      }));
    }
  };

  const handleSizeChange = (event) => {
    const { name, value } = event.target;
    setSelectedProductSize((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCarBodyChange = (event) => {
    const { name, value } = event.target;
    setSelectedCarBody((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleColorChange = (event) => {
    const { name, value } = event.target
    setSelectedProductColor((prev) => ({
      ...prev,
      [name]: value
    }))
  }

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
      {finishPopup && (
        <div className={styles.successPopup}>
          <button className={styles.closeButton} onClick={() => setFinishPopup(false)}>
            &times;
          </button>
          <h1>Ваш заказ принят!</h1>
          <h2>В ближайшее время с вами свяжется наш администратор</h2>
        </div>
      )}
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

                {currentPopup.carBody && (
                  <>
                    <div className={styles.orderParams}>
                      <h3>Размер:</h3>
                      <p>{selectedProductSize[currentPopup.name]}</p>
                    </div>
                    <div className={styles.orderParams}>
                      <h3>Кузов:</h3>
                      <p>{selectedCarBody[currentPopup.name]}</p>
                    </div>
                  </>
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
          </div>
        </div>
      )}

      <div className={styles.productsWrapper}>
        {products.map((product) => {
          const bodyName = selectedCarBody[product.name];
          let carBodyKey = '';

          switch (bodyName) {
            case 'Седан':
              carBodyKey = 'sedan';
              break;
            case 'Универсал':
              carBodyKey = 'universal';
              break;
            case 'Кроссовер':
              carBodyKey = 'crossover';
              break;
            default:
              carBodyKey = 'sedan';
          }

          return (
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

                {product.carBody && product.carBody[carBodyKey] && (
                  <>
                    <h4>Размер</h4>
                    <select
                      name={product.name}
                      value={selectedProductSize[product.name]}
                      onChange={handleSizeChange}
                      className={styles.option}
                    >
                      {product.carBody[carBodyKey].size.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>

                    <h4>Кузов</h4>
                    <select
                      name={product.name}
                      value={selectedCarBody[product.name]}
                      onChange={handleCarBodyChange}
                      className={styles.option}
                    >
                      {product.bodyNames.map((body) => (
                        <option key={body} value={body}>
                          {body}
                        </option>
                      ))}
                    </select>
                  </>
                )}

                {product.inStock === false ? (
                  <b>Нет в наличии</b>
                ) : !product.carBody ? (
                  <b>Под заказ</b>
                ) : (
                  <b>{selectedProductPrice[product.name]}₽</b>
                )}

                <button onClick={() => openPopup(product)} disabled={product.inStock === false}>КУПИТЬ</button>
              </div>
            </div>
          );
        })}
      </div>

      <p className={styles.desc}> Основным направлением магазина являются товары для сохранения тепла автомобилей, гаражей и других помещений. У нас в продаже портативные гаражи (утепленные тенты-чехлы), утепленные гаражные шторы. Мы выбрали оптимальную толщину наших изделий, которая позволяет сочетать хорошие термоизоляционные свойства с весом изделий. </p> <p className={styles.desc}> Портативные гаражи за несколько лет использования хорошо зарекомендовали себя как в районах с умеренными зимними температурами, такими как Забайкальский край, Амурская область, Красноярский край, Иркутская область, Сахалин, Камчатка и т. д, так и в районах Крайнего Севера, северных районах Сибири и Дальнего Востока, где зимние значения температур могут достигать — 50 градусов и ниже.{' '} </p> <p className={styles.desc}> Так же возможен отшив пологов, чехлов, штор из простеганного утепленного материала по размерам заказчика. Все представленные простёганные изделия или есть в наличии и отправляются покупателям в течении 1−3-х дней после оплаты заказа. Или, в случае если в наличии нет товара с необходимыми характеристиками, производятся и отправляются покупателям в согласованные сроки напрямую с фабрики Китая. </p>
    </div>
  );
}
