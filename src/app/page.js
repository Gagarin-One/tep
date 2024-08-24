import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>Зимний портативный гараж</title>
        <meta name="description" content="Купите зимний портативный гараж для надежной защиты вашего автомобиля от снега и холода. Удобные и практичные решения для хранения." />
        <meta name="keywords" content="зимний гараж, портативный гараж, защита автомобиля, гараж для зимы, складной гараж, тёплый гараж" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className={styles.main}>
      <section className={styles.titleSection}>
        <div className={styles.title}>
          <h1 className={styles.mainTitle}>ПОРТАТИВНЫЙ ГАРАЖ</h1>
          <h1>- КАКОЙ ОН?</h1>
        </div>

        <h2>Это утепленный многослойный тент-чехол для Вашего автомобиля, выполненный из ветрозащитной, влагонепроницаемой, плохо горючей ткани. Использование его в зимнее время позволяет сохранить температуру двигателя автомобиля приемлемой для запуска в течение 10−12 часов и более, в зависимости от температуры окружающего воздуха.
          Окупается за один сезон использования

        </h2>
      </section>


      <div className={styles.imgWrapper}><Image src="https://optim.tildacdn.com/tild3661-3333-4663-a136-643837363938/-/format/webp/___.png" width={780} height={500} alt="Автомобиль зимой" priority/></div>

      <section className={styles.secondSection}>
        <h1>КТО И ГДЕ ПОЛЬЗУЕТСЯ ПОРТАТИВНЫМИ ГАРАЖАМИ</h1>
        <h2>Жильцы многоэтажных домов и частного сектора при отсутствии теплой стоянки или гаража.
          Жители удаленных районов, в сельской местности.
          Люди, отправляющиеся в командировки на автомобиле в зимний период.
          Охотники, рыбаки, туристы, любители активного отдыха
          на спортивных базах и базах отдыха для сдачи в аренду или как дополнительная бесплатная услуга
          На стройках для обогрева техники в зимний период
          Для отогрева замерзших автомобилей.
          Так же возможен отшив тентов, пологов, гаражных штор. и пр. утепленной продукции


        </h2>

      </section>

      <section>

        <h1>ОСОБЕННОСТИ</h1>
        <h2>Наши портативные гаражи имеют несколько решений, которые сделаны для максимального сохранения тепла и удобства использования.
        </h2>

      </section>
      <section className={styles.specialSection}>
        <div className={styles.imgWrapper}><Image src="https://optim.tildacdn.com/tild3661-3333-4663-a136-643837363938/-/format/webp/___.png"  width={500} height={400} priority/></div>
        <div>
          <h1>Крепление портативного гаража</h1>
          <h3>В нижней части чехла есть петли, через которые пропускается нейлоновая веревка или трос (идет в комплекте) для надежной фиксации чехла на автомобиле.
          </h3>
        </div>


      </section>
      <section className={styles.specialSection}>

        <div>
          <h1>Напуск по высоте</h1>
          <h3>Портативный гараж имеет напуск по высоте. Это делается для того, чтобы как можно меньше выдувался теплый воздух из-под днища автомобиля.
          </h3>
        </div>
        <div className={styles.imgWrapper}><Image src="https://optim.tildacdn.com/tild6633-3062-4334-b636-633238303566/-/format/webp/__2.png"  width={500} height={400} priority/></div>

      </section>
      <section className={styles.specialSection}>
        <div className={styles.imgWrapper}><Image src="https://optim.tildacdn.com/tild3264-3039-4164-a138-373964333132/-/format/webp/_.png" width={500} height={400} priority/></div>
        <div>
          <h1>Светоотражающие полоски</h1>
          <h3>Для дополнительной безопасности и лучшей видимости в ночное время, дополнительно пришиты полоски из светоотражающего материала.
          </h3>
        </div>


      </section>
      <section className={styles.specialSection}>
        <div className={styles.imgWrapper}><Image src="https://optim.tildacdn.com/tild6532-6231-4364-a238-313662363338/-/format/webp/_2.png"  width={500} height={400} priority/></div>
        <div >
          <h1>Многослойный материал</h1>
          <ul className={styles.compositionList}>
            <li>

              1. Ткань "Оксфорд"

            </li>
            <li>2. Термопленка</li>
            <li>3. Утеплитель</li>
            <li>4. Термопленка</li>
            <li>5. Полиэстер (исусственный шелк)</li>
            <li>Нижний слой выполнен из подкладочной полиэфирной ткани (искусственный шелк). Верхний слой покрытие — ткань «Оксфорд»,  Средний слой -утеплитель типа «синтепон» плотностью 260 гр/м.кв. </li>
          </ul>
        </div>




      </section >
      <section className={styles.characteristicsList}>
        <div>
          <Image src="https://optim.tildacdn.com/tild3230-6461-4764-a435-623163616431/-/resize/480x/-/format/webp/Screenshot_8.png" width={120} height={120} alt="Зимний портативный гараж" priority/>
          <h2>Слабо горючая ткань.</h2>
          <h3>Верхнее покрытие выполнено из ткани «Оксфорд», которая может выдержать кратковременное воздействие высоких температур.
          </h3>

        </div>
        <div>
          <Image src="https://optim.tildacdn.com/tild3533-6664-4333-b131-373138313834/-/resize/480x/-/format/webp/Screenshot_4_1.png" width={120} height={120} alt="Зимний портативный гараж" priority/>
          <h2>Крепление к колесу</h2>
          <h3>Для дополнительной безопасности и лучшей видимости в ночное время, дополнительно пришиты полоски из светоотражающего материала.
          </h3>

        </div>
        <div>
          <Image src="https://optim.tildacdn.com/tild3135-3434-4063-a637-633832353837/-/resize/480x/-/format/webp/photo.png" width={120} height={120} alt="Зимний портативный гараж" priority/>
          <h2>Простеганы все слои</h2>
          <h3>Все слои портативного гаража простеганы, что не позволяет слоям смещаться отностительно друг друга и не растрепываться утеплителю.
          </h3>

        </div>
      </section>

      <section className={styles.sizesSection}>
        <h1>РАЗМЕРЫ И ЦВЕТА</h1>
        <h2>ЦВЕТА
          Наши портативные гаражи выпускаются в разных типоразмерах. Это сделано для более точного подбора портативного гаража в соответствии с размерами вашего автомобиля. Чехол должен плотно прилегать к лобовому стеклу и капоту.
          Мы разбили все типоразмеры на три категории: седан, хэтчбек, внедорожник. Чтобы упростить выбор в нашем интернет-магазине создана универсальная размерная сетка, соответствующая разным транспортным средствам. Все размеры представлены в следующем виде: длина автомобиля в метрах и тип-кузов.
          .Например 4.6 внедорожник или 4.5 хэтчбек.

        </h2>
      </section>
   
        <div className={styles.productLink}>
          <div>
            <Image
              src="https://optim.tildacdn.com/tild3339-6165-4161-b964-613435633539/-/resize/200x/-/format/webp/noroot.png"
alt="Зимний портативный гараж"
              className={styles.imgSt}
              width={120}
              height={50}
 
              priority
            />
            <span >Седан/&nbsp; &nbsp; лифтбек</span>
            <div>
              <ul>
                <li>Седан 4 м</li>
                <li>Седан 4,2 м</li>
                <li>Седан 4,3 м</li>
                <li>Седан 4,4 м</li>
                <li>Седан 4,6 м</li>
                <li>Седан 4,7 м</li>
              </ul>
            </div>
            <Link
              href="/products"

              className={styles.buyBtn}
            >КУПИТЬ</Link>
          </div>
          <div>
            <Image
              src="https://optim.tildacdn.com/tild3030-6661-4039-a463-393634383230/-/resize/200x/-/format/webp/_4f.png"
              alt="Зимний портативный гараж"
              className={styles.imgSt}
              width={120}
              height={50}
              priority
            />
            <span >Хэтчбек/универсал</span>
            <div>
              <ul>
                <li>Седан 4 м</li>
                <li>Седан 4,2 м</li>
                <li>Седан 4,3 м</li>
                <li>Седан 4,4 м</li>
                <li>Седан 4,6 м</li>
                <li>Седан 4,7 м</li>
              </ul>
            </div>
            <Link
              href="/products"

              className={styles.buyBtn}
            >КУПИТЬ</Link>
          </div>
          <div>
            <Image
              src="https://optim.tildacdn.com/tild3430-6632-4066-b861-343334366531/-/resize/200x/-/format/webp/noroot.png"
              alt="Зимний портативный гараж"
              className={styles.imgSt}
              width={120}
              height={50}
              priority
            />
            <span >Минивен/кроссовер</span>
            <div>
              <ul>
                <li>Седан 4 м</li>
                <li>Седан 4,2 м</li>
                <li>Седан 4,3 м</li>
                <li>Седан 4,4 м</li>
                <li>Седан 4,6 м</li>
                <li>Седан 4,7 м</li>
              </ul>
            </div>
            <Link
              href="/products"

              className={styles.buyBtn}
            >КУПИТЬ</Link>
          </div>
          <div>
            <Image
              src="https://optim.tildacdn.com/tild6663-6239-4062-b763-376339363530/-/resize/200x/-/format/webp/noroot.png"
              alt="Зимний портативный гараж"
              className={styles.imgSt}
              width={120}
              height={50}
              priority
            />
            <span >Кроссовер/внедорожник</span>
            <div>
              <ul>
                <li>Седан 4 м</li>
                <li>Седан 4,2 м</li>
                <li>Седан 4,3 м</li>
                <li>Седан 4,4 м</li>
                <li>Седан 4,6 м</li>
                <li>Седан 4,7 м</li>
              </ul>
            </div>
            <Link
              href="/products"

              className={styles.buyBtn}
            >КУПИТЬ</Link>
          </div>

        </div>


    </main>
    </>
    
  );
}
