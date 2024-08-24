import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Page() {

  return <>
    <Head>
      <title>Зимний портативный гараж</title>
      <meta name="description" content="Купите зимний портативный гараж для надежной защиты вашего автомобиля от снега и холода. Удобные и практичные решения для хранения." />
      <meta name="keywords" content="зимний гараж, портативный гараж, защита автомобиля, гараж для зимы, складной гараж, тёплый гараж" />
      <meta name="robots" content="index, follow" />
    </Head>

    <main className={styles.main}>
      <div>
        <Image src="/334.webp" width="100" height="100" alt="Зимний портативный гараж" />
        <h1>УСЛОВИЯ ОПТОВОЙ ПРОДАЖИ</h1>

        <h3>Количество</h3>
        <p>Продаем портативные гаражи оптом от 15 шт.</p>
        <h3>Оплата</h3>
        <p>Предоплата 50% от стоимости заказа
          После изготовления заказа, перед отправкой покупателю - оплата второй части.</p>
        <h3>Цена</h3>
        <p>Цена рассчитывается индивидуально по каждой партии товара, зависимости от количества, номенклатуры, курса юаня. А так же от индивидуальных требований к товару. Таких как размер, плотность утеплителя, наличие молний и т.д.</p>
        <h3>Подробнее</h3>
        <p>Более подробно ответим на ваши вопросы при обращении по телефону, на е-мейл </p>
      </div>
    </main>
  </>

}