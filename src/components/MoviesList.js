import React from "react";
import MoviesCard from './MoviesCard'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const MoviesList=(props)=>{
    const {moviesStore}=props
    return (
        <div className="row">
            {
                moviesStore.length>0&&
                moviesStore.map((ele)=>{
                    return <MoviesCard key={ele.id} {...ele}/>
                })
            }
        </div>
    )
}
export default MoviesList