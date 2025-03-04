
import { PokemonGrid } from "@/pokemons";


export const metadata = {
 title: 'Favorites List',
 description: 'Pokemon favorites list',
};


export default async function FavoritesPage() {

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Favorites Pokemons List <small className="text-blue-500">Global State</small></span>

      <PokemonGrid pokemons={ [] }/>

    </div>
  );
}