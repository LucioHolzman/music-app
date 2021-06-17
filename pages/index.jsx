import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import stylesCard from '../styles/Card.module.css'
import Images from '../API/music';

import Card from '../components/Card'
import DiskCard from '../components/DiskCard'

// export async function getStaticProps() {
//   const db = await myDB.connect({
//     host: process.env.DB_HOST,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//   })
// }

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>

        <div className="container h-full w-full flex">
          <div className="container w-5/12 h-full">

            <div className="flex justify-center items-center container h-20">
              <input className="bg-transparent w-full outline-none text-white p-1 border-b" placeholder="Search music" type="text" />
            </div>
            <div className="container h-full">
              <nav>
                <ul className="text-white font-light flex-col space-y-4 pr-4 pl-4">
                  <li className="flex">
                    <span className={`${styles.spanSelected}`}>
                    </span>
                    <Link href="/">
                      <a className="flex ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="flex">
                    <span>
                    </span>
                    <Link href="/">
                      <a className="flex ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        Recommendations
                      </a></Link>
                  </li>
                  <li className="flex">
                    <span>
                    </span>
                    <Link href="/">
                      <a className="flex ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Top songs
                      </a></Link>
                  </li>
                  <li className="flex">
                    <span>
                    </span>
                    <Link href="/">
                      <a className="flex ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        Recently heard
                      </a></Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="container  w-9/12 h-full">
            <div className="w-full bg-red-500">

            </div>
            <div className="container space-y-8 pl-24 pt-24">
              <div className="w-full relative overflow-hidden">
                <div className="container text-white top-10 absolute font-light text-2xl mb-2">
                  <h1>Featured</h1>
                </div>
                <div className={`${stylesCard.scroll} pt-24 pb-4 flex space-x-8 overflow-y-hidden overflow-x-scroll`}>
                  {Object.keys(Images).map(card => (
                    <Card
                      key={card}
                      colorBg={Images[card].albums.colorBg}
                      imageURL={Images[card].principal.imageURL}
                      albumName={Images[card].albums.albumName}
                      authorName={Images[card].principal.authorName}
                    />
                  ))
                  }
                </div>
              </div>
              <div className="w-full overflow-hidden">
                <div className="container text-white font-light text-2xl mb-2">
                  <h1>Popular</h1>
                </div>
                <div className={`${stylesCard.scroll} pt-4 pb-4 flex space-x-8 overflow-x-scroll`}>
                  {Object.keys(Images).map(card => (
                    <DiskCard
                      key={card}
                      imageURL={Images[card].albums.imageURL}
                      albumName={Images[card].albums.albumName}
                      authorName={Images[card].principal.authorName}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
