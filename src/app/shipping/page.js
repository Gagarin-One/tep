
import Image from "next/image";
import styles from "./page.module.css";
export const metadata = {
  title: 'Портативный гараж - доставка',
  description: 'Купите зимний портативный гараж для надежной защиты вашего автомобиля от снега и холода. Удобные и практичные решения для хранения.',
  keywords: ['зимний гараж', 'портативный гараж', 'гараж для зимы', 'складной гараж', 'тёплый гараж', 'тёплый чехол', 'чехол для автомобиля', 'зимний чехол', 'складной гараж']

}
export default function Page() {

  return <>
  <main className={styles.shipping}>
    <div className={styles.title}><h1>ОПЛАТА И ДОСТАВКА</h1></div>
    
    <div className={styles.shippingSection}>
      <div >
        <Image src='/images/11.png' width={100} height={100} />
        <h2>Оплата</h2>
        <p>В данный момент мы принимаем оплату на банковскую карту и наличными</p>
      </div>
      <div >
        <Image src='/images/12.png' width={100} height={100} alt="Зимний портативный гараж"/>
        <h2>Доставка</h2>
        <p>Мы осуществляем доставку транспортными компаниями на выбор клиента, представительство которых есть в г.Чита.
        Стоимость доставки транспортными компаниями оплачивается покупателем при получении. Стоимость доставки почтой России оплачивается покупателем или вместе с товаром при оформлении заказа или при получении наложенным платежом.
        Доставка купленного товара до отделения связи или склада транспортной компании производится БЕСПЛАТНО.Цена доставки может значительно меняться в зависимости от способа доставки и удаленности получателя груза.  </p>
      </div>
      <div >
        <Image src='/images/13.png' width={100} height={100} alt="Зимний портативный гараж"/>
        <h2>Полезная информация</h2>
        <p>
        Все представленные простёганные изделия или есть в наличии и отправляются покупателям в течении 1−3-х дней после оплаты заказа. Или, в случае если в наличии нет товара с необходимыми характеристиками, производятся и отправляются покупателям в согласованные сроки напрямую с фабрики Китая.
           Стоимость доставки до Вашего адреса вы можете самостоятельно рассчитать на сайтах грузоперевозчиков или можете обратиться к нам за расчетом.
        </p>
      </div>
    </div>

  </main>
  </>
  
  

}