import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import RecipeCard from '../components/RecipeCard'


const recipes = [
  {
    link: 'https://www.bonappetit.com/recipe/vegan-coconut-lentil-soup',
    title: 'Coconut Lentil Soup',
    submitter: 'A'
  },
  /* {
     link: 'https://www.howsweeteats.com/2018/03/sheet-pan-salmon-brussels/',
     title: 'Honey Garlic Salmon',
     submitter: 'C'
   }, */
  {
    link: 'https://www.epicurious.com/recipes/food/views/coconut-turmeric-relish',
    title: 'Coconut Tumeric Relish',
    submitter: 'A'
  },
  {
    link: "https://www.bonappetit.com/recipe/coconut-tofu-stir-fry",
    title: 'Coconut Tofu Stir-Fry',
    submitter: 'B'
  }

]


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yecipe</title>
        <meta name="description" content="Recipes with friends." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>YECIPE</div>
        <Navigation />
        <div className={styles.grid}>
          {recipes.map((recipe) => (
            <RecipeCard
              link={recipe.link}
              title={recipe.title}
              submitter={recipe.submitter}
            />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
