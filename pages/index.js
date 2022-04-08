import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import RecipeCard from '../components/RecipeCard'


const recipes = [
    {
        link: 'https://www.bonappetit.com/recipe/vegan-coconut-lentil-soup',
        title: 'Coconut Lentil Soup',
        submitter: 'A',
        id: '1'
    },
    /* {
       link: 'https://www.howsweeteats.com/2018/03/sheet-pan-salmon-brussels/',
       title: 'Honey Garlic Salmon',
       submitter: 'C'
     }, */
    {
        link: 'https://www.epicurious.com/recipes/food/views/coconut-turmeric-relish',
        title: 'Coconut Tumeric Relish',
        submitter: 'A',
        id: '2'
    },
    {
        link: "https://www.bonappetit.com/recipe/coconut-tofu-stir-fry",
        title: 'Coconut Tofu Stir-Fry',
        submitter: 'B',
        id: '3'
    }

]


export default function Home() {
    return (

        <div className={styles.grid}>
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.key}
                    link={recipe.link}
                    title={recipe.title}
                    submitter={recipe.submitter}
                />
            ))}
        </div>

    )
}
