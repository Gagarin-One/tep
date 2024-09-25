'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import ContactForm from "./form";
import Head from "next/head";


export default function Page() {
  const products = [
    {
      name: "Тепло-Стандарт",
      size: ['4,0', '4,2', '4,4', '4,6', '4,7', 'ваш размер- (под заказ)'],
      desc: 'Утепленный тент-чехол 300 гр/м',
      color: ['серебро'],
      carBody: ['Седан', 'Хэтчбек', 'Минивен', 'Кроссовер'],
      img: "/images/IMG_4557.png",
      imgWidth: 280,
      imgHeight: 230
    },
    {
      name: "Тепло-Премиум",
      size: ['4,0', '4,2', '4,4', '4,6', '4,7', 'ваш размер- (под заказ)'],
      desc: 'Утепленный тент-чехол 350 гр/м',
      color: ['серебро'],
      carBody: ['Седан', 'Хэтчбек', 'Минивен', 'Кроссовер'],
      img: "/images/IMG_4557.png",
      imgWidth: 280,
      imgHeight: 230
    },
    {
      name: "Тепло-Камуфляж",
      size: ['4,0', '4,2', '4,4', '4,6', '4,7', 'ваш размер- (под заказ)'],
      desc: 'Утепленный тент-чехол 300 гр/м',
      color: ['камуфляж'],
      carBody: ['Седан', 'Хэтчбек', 'Минивен', 'Кроссовер'],
      img: "/images/2.png",
      imgWidth: 300,
      imgHeight: 200
    },
    {
      name: "Утепленные гаражные шторы",
      size: ["Стандарт"],
      desc: 'Утепленный полог для гаража',
      color: ['серебро', 'камуфляж'],
      img: "/images/10.png",
      imgWidth: 300,
      imgHeight: 200
    }
  ]

  let [popup, setPopup] = useState(false)
  let [currentPopup, setCurrentPopup] = useState({
  })
  const [finishPopup, setFinishPopup] = useState(false);

  let [selectedProductSize, setSelectedProductSize] = useState({
    'Тепло-Стандарт': '4,0',
    'Тепло-Премиум': '4,0',
    'Тепло-Камуфляж': '4,0',
    'Утепленные гаражные шторы': 'Стандарт',
  })

  let [selectedProductColor, setSelectedProductColor] = useState({
    'Тепло-Стандарт': 'серебро',
    'Тепло-Премиум': 'серебро',
    'Тепло-Камуфляж': 'серебро',
    'Утепленные гаражные шторы': 'серебро',
  })

  let [selectedCarBody, setSelectedCarBody] = useState({
    'Тепло-Стандарт': 'Седан',
    'Тепло-Премиум': 'Седан',
    'Тепло-Камуфляж': 'Седан',
    'Утепленные гаражные шторы': '',
  })

  const handleSizeChange = (event) => {
    const { name, value } = event.target;
    setSelectedProductSize((prev) => ({
      ...prev,
      [name]: value

    }));

  };
  const handleColorChange = (event) => {
    const { name, value } = event.target;
    setSelectedProductColor((prev) => ({
      ...prev,
      [name]: value

    }));

  };

  const handleCarBodyChange = (event) => {
    const { name, value } = event.target;
    setSelectedCarBody((prev) => ({
      ...prev,
      [name]: value

    }));

  };

  let openPopup = (currentProduct) => {
    setPopup(!popup)
    setCurrentPopup(currentProduct)
  }


  return <div>
    <Head>
      <title>Магазин - Зимний портативный гараж</title>
      <meta name="description" content="Магазин зимних портативных гаражей" />
      <meta name="keywords" content="зимний гараж, портативный гараж, защита автомобиля, гараж для зимы, складной гараж, тёплый гараж" />
      <meta name="robots" content="index, follow" />
    </Head>
    <div>
      {
        <div>{

          finishPopup && <div className={styles.successPopup}>
            <button className={styles.closeButton} onClick={() => setFinishPopup(false)}>
              &times;
            </button>
            <h1>Ваш заказ принят!</h1>
            <h2>В ближайшее время с вами свяжется наш администратор</h2>
          </div>
        }</div>
      }
    </div>
    <div>
      {
        popup && <div className={styles.modalOverlay}>
          <div className={styles.popupWrapper}>
            <div className={styles.popup}>
              <button className={styles.closeButton} onClick={() => setPopup(false)}>
                &times;
              </button>

              <h1>Ваш заказ:</h1>
              <div className={styles.order}>
                <Image src={currentPopup.img} width={currentPopup.imgWidth} height={currentPopup.imgHeight} alt={currentPopup.name} />
                <h2>{currentPopup.name}</h2>

                <div className={styles.orderParams}>
                  <h3>Цвет:</h3>
                  <p>{selectedProductColor[currentPopup.name]}</p>
                </div>

                <div className={styles.orderParams}>
                  <h3>Размер:</h3>
                  <p>{selectedProductSize[currentPopup.name]}</p>
                </div>
                {
                  currentPopup.name !== 'Утепленные гаражные шторы' && <div className={styles.orderParams}>
                  <h3>Кузов:</h3>
                  <p>{selectedCarBody[currentPopup.name]}</p>
                </div>

                }
                

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

            <div>

            </div>
          </div>
        </div>

      }
    </div>



    <div className={styles.productsWrapper}>
      {products.map((product) =>
        <div key={product.name} className={styles.products}>
          <div className={styles.product}>

            <Image src={product.img} width={product.imgWidth} height={product.imgHeight} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>{product.desc}</h3>
            <h4>Размер</h4>
            <select
              name={product.name}
              value={selectedProductSize[product.name]}
              onChange={handleSizeChange}
              className={styles.option}
            >
              {
                product.size.map((size) =>
                  <option key={size} value={size}>{size}</option>
                )
              }
            </select>
            <h4>Цвет</h4>
            <select
              name={product.name}
              value={selectedProductColor[product.name]}
              onChange={handleColorChange}
              className={styles.option}
            >
              {
                product.color.map((color) =>
                  <option key={color} value={color} >{color}</option>
                )
              }
            </select>
            {
              product.name !== 'Утепленные гаражные шторы' && <h4>Кузов</h4>
            }

            {product.name !== 'Утепленные гаражные шторы' && <select
              name={product.name}
              value={selectedCarBody[product.name]}
              onChange={handleCarBodyChange}
              className={styles.option}
            >
              {
                product.carBody.map((carBody) =>
                  <option key={carBody} value={carBody} >{carBody}</option>
                )
              }
            </select>

            }

            <button onClick={() => openPopup(product)}>КУПИТЬ</button>
          </div>
        </div>

      )}
    </div>
    <p className={styles.desc}>
      Основным направлением магазина являются товары для сохранения тепла автомобилей, гаражей и других помещений. У нас в продаже портативные гаражи (утепленные тенты-чехлы), утепленные гаражные шторы.
      Мы выбрали оптимальную толщину наших изделий, которая позволяет сочетать хорошие термоизоляционные свойства с весом изделий.
    </p>
    <p className={styles.desc}>Портативные гаражи за несколько лет использования хорошо зарекомендовали себя как в районах с умеренными зимними температурами, такими как Забайкальский край, Амурская область, Красноярский край, Иркутская область, Сахалин, Камчатка и т. д, так и в районах Крайнего Севера, северных районах Сибири и Дальнего Востока, где зимние значения температур могут достигать — 50 градусов и ниже. </p>
    <p className={styles.desc}>Так же возможен отшив пологов, чехлов, штор из простеганного утепленного материала по размерам заказчика.
      Все представленные простёганные изделия или есть в наличии и отправляются покупателям в течении 1−3-х дней после оплаты заказа. Или, в случае если в наличии нет товара с необходимыми характеристиками, производятся и отправляются покупателям в согласованные сроки напрямую с фабрики Китая.</p>
  </div>
}