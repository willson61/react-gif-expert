import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({category}) => {

    const { images, isLoading} = useFetchGifs(category);

    // ...property => Spread
    return (
        <>
            <h3>{ category }</h3>
            {
                // isLoading ? (<h2>Cargando...</h2>) : null
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
            {
                images.map( (image) => (
                    <GifGridItem key={image.id} { ...image }></GifGridItem>
                ))
            }
            </div>
        </>
    )
}
