import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"

export const PokemonApp = () => {

    const dispatch = useDispatch()
    const { page, pokemons, isLoading } = useSelector( state => state.pokemon )

    useEffect(()=>{
        dispatch( getPokemons() )
    },[])

    return (
        <>
            <h1>Pokemon app</h1>
            <hr />
            <span>loading: { isLoading ? 'True' : 'False' }</span>
            <ul>
                {
                    pokemons.map( pokemon => (
                        <li key={pokemon.url}>{ pokemon.name }</li>
                    ))
                }
            </ul>

            <button 
                disabled={ isLoading || page === 1 } 
                onClick={()=>{ dispatch( getPokemons( page - 2 ) ) }}
            >
                    Previus
            </button>
            <button 
                disabled={ isLoading } 
                onClick={()=>{ dispatch( getPokemons( page ) ) }}
            >
                    Next
            </button>
        </>
    )
}
