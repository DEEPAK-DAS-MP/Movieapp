import React,{ useState} from 'react'
import {addMovie} from '../actions/MoviesAction'
import {useDispatch} from 'react-redux'
const MovieForm=(props)=>{
    const [movieName,setMovieName]=useState('')
    const [ranking,setRanking]=useState('')
    const dispatch=useDispatch()
    const handleMovieChange=(e)=>{
        setMovieName(e.target.value)
    }
    const handleRanking=(e)=>{
        setRanking(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const movieData={
            id:Number(new Date()),
            movieName:movieName,
            ranking:Number(ranking)
        }
        dispatch(addMovie(movieData))
        setMovieName('')
        setRanking('')
    }
    return (
        <div>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter Movie Name </label>
                <input type="text" placeholder='Enter Movie Name' value={movieName} onChange={handleMovieChange}/><br/><br/>
                <label>Enter IMDB Ranking </label>
                <input type="text" placeholder='IMDB Ranking' value={ranking} onChange={handleRanking}/><br/><br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}
export default MovieForm