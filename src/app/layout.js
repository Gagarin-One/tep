import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { Metrika } from "@/app/components/metrica";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Портативный гараж",
  description:
    "Купите зимний портативный гараж для надежной защиты вашего автомобиля от снега и холода. Удобные и практичные решения для хранения в Чите. Доставка по всей России. Теплохранитель авто.",
  keywords: [
    "зимний гараж",
    "портативный гараж",
    "зимний гараж в Чите",
    "портативный гараж в Чите",
    "гараж для зимы",
    "складной гараж",
    "тёплый гараж",
    "тёплый чехол",
    "чехол для автомобиля",
    "зимний чехол",
    "складной гараж",
    "Теплохранитель авто"
  ],
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Suspense>
          <Metrika />
        </Suspense>

        <header>
          <div className={styles.description}>
            <b>E-mail: ekonomka07@mail.ru</b>

            <div className={styles.headerTitle}>
              <Image
                src="https://optim.tildacdn.com/tild3339-6165-4161-b964-613435633539/-/resize/200x/-/format/webp/noroot.png"
                alt="Зимний портативный гараж"
                className={styles.mainLogo}
                width={110}
                height={50}
                priority
              />
              <div>
                <h3>Портативные гаражи</h3>
                <h1>TEPLOHRANITEL-AVTO</h1>
              </div>
            </div>

            <div className={styles.phoneNum}>
              <b>8 914 140 56 01</b>
              <b>8 924 811 08 08</b>
              <b>8 (3022) 71 08 08</b>
            </div>
          </div>

          <section className={styles.headerWrapper}>
            <div className={styles.linksWrapper}>
              <ul className={styles.links}>
                <li>
                  <Link href="/">ГЛАВНАЯ</Link>
                </li>
                <li>
                  <Link href="/products">МАГАЗИН</Link>
                </li>
                <li>
                  <Link href="/shipping">ОПЛАТА И ДОСТАВКА</Link>
                </li>
                <li>
                  <Link href="/contacts">КОНТАКТЫ</Link>
                </li>
                <li>
                  <Link href="/opt">ОПТ</Link>
                </li>
              </ul>
            </div>
          </section>
        </header>

        {children}

        <footer className={styles.footer}>
          <div>
            <h1>teplohranitel-avto.ru</h1>
            <h3 className={styles.slogan}>Портативные гаражи</h3>

            <p>+7-924-811-08-08</p>
            <p>email: ekonomka07@mail.ru</p>

            {/* VK */}
            <svg
              className="t-sociallinks__svg"
              role="presentation"
              width="25px"
              height="25px"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.7512 76.4147C25.0516 76.4147 8.68207 56.7395 8 24H22.376C22.8482 48.03 33.4463 58.2086 41.8411 60.3073V24H55.3782V44.7245C63.668 43.8326 72.3765 34.3885 75.3146 24H88.8514C86.5954 36.802 77.1513 46.2461 70.4355 50.1287C77.1513 53.2767 87.9076 61.5141 92 76.4147H77.0988C73.8983 66.446 65.9241 58.7333 55.3782 57.684V76.4147H53.7512Z"
                fill="#f0e7e7"
              ></path>
            </svg>

            {/* Telegram */}
            <svg
              className="t-sociallinks__svg"
              role="presentation"
              width="25px"
              height="25px"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M83.1797 17.5886C83.1797 17.5886 90.5802 14.7028 89.9635 21.711C89.758 24.5968 87.9079 34.6968 86.4688 45.6214L81.5351 77.9827C81.5351 77.9827 81.124 82.7235 77.4237 83.548C73.7233 84.3724 68.173 80.6623 67.145 79.8378C66.3227 79.2195 51.7273 69.9438 46.5878 65.4092C45.1488 64.1724 43.5042 61.6989 46.7934 58.8132L68.3785 38.201C70.8454 35.7274 73.3122 29.956 63.0336 36.9642L34.2535 56.5459C34.2535 56.5459 30.9644 58.6071 24.7973 56.752L11.4351 52.6295C11.4351 52.6295 6.50135 49.5377 14.9298 46.4457C35.4871 36.7579 60.7724 26.864 83.1797 17.5886Z"
                fill="#f0e7e7"
              ></path>
            </svg>

            {/* WhatsApp */}
            <svg
              className="t-sociallinks__svg"
              role="presentation"
              width="25px"
              height="25px"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.168 10C60.8239 10.004 70.8257 14.1522 78.346 21.6819C85.8676 29.2114 90.0066 39.2185 90 49.8636C89.9906 71.8252 72.1203 89.6956 50.1668 89.6956H50.1508C43.4852 89.6929 36.9338 88.0208 31.1162 84.8468L10 90.3853L15.6516 69.7437C12.1665 63.7042 10.3323 56.851 10.3349 49.8304C10.343 27.8676 28.2134 10 50.168 10V10ZM61.5376 54.7631C62.4507 55.0954 67.3433 57.5023 68.3389 58.0009C68.5313 58.0971 68.7113 58.1842 68.8784 58.265C69.5753 58.602 70.0458 58.8296 70.2462 59.1651C70.4947 59.5799 70.4947 61.5736 69.6654 63.8982C68.8359 66.2229 64.8605 68.3442 62.9478 68.63C61.2319 68.8865 59.0627 68.9928 56.6782 68.2353C55.2322 67.7767 53.3794 67.1653 51.0041 66.1392C41.6698 62.1082 35.3628 53.06 34.1747 51.3556C33.486 50.4243 29.9372 45.7022 29.9372 40.8149C29.9372 36.2325 32.1873 33.8303 33.2244 32.7232C34.3341 31.5149 35.412 31.2664 36.0751 31.2664C36.7385 31.2664 37.4029 31.2717 37.9826 31.301C39.5087 31.2957 40.2221 33.0089 40.4976 33.6707C41.3265 35.6882 43.1251 40.066 43.2912 40.399C43.7058 41.4782 43.3736 42.1427 42.378 43.8029C41.1842 45.2488 40.8853 45.5467 40.4493 47.5777C41.03 48.5731 43.028 51.8323 45.9867 54.472C49.1661 57.3091 51.93 58.5078 53.3318 59.1157C54.9849 59.9109 55.5658 59.8284 56.1465 59.1637C56.7274 58.4993 58.6347 56.2583 59.298 55.2615C59.9612 54.2646 60.6259 54.4307 61.5376 54.7631Z"
                fill="#f0e7e7"
              ></path>
            </svg>
          </div>

          <div className={styles.footerMenu}>
            <h3>МЕНЮ</h3>
            <ul>
              <li>
                <Link href="/">ГЛАВНАЯ</Link>
              </li>
              <li>
                <Link href="/products">МАГАЗИН</Link>
              </li>
              <li>
                <Link href="/shipping">ОПЛАТА И ДОСТАВКА</Link>
              </li>
              <li>
                <Link href="/contacts">КОНТАКТЫ</Link>
              </li>
              <li>
                <Link href="/opt">ОПТ</Link>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );

}
