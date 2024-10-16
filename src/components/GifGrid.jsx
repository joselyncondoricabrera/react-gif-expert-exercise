
import GiftGridItem from "./GiftGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category );

    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>cargando...</h2>)
            }
            

            <div className="card-grid">
                {
                    images.map(( image )=>(
                        <GiftGridItem 
                          key={ image.id } 
                          {...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
