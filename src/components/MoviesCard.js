import React from "react";
import { removeMovie } from "../actions/MoviesAction";
import { useDispatch } from "react-redux";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const MoviesCard=(props)=>{
    const {movieName,id,ranking}=props
    const dispatch=useDispatch()
const handleRemove=(id)=>{
    const result=window.confirm('are you sure!!')
    if(result){
        dispatch(removeMovie(id))
    }
}
return (
    <div className="col-md-2">
        <div className="card" style={{width:'12rem', height:'230px'}}>
            <img src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg" 
            className="card-img-top" alt=" "/>
            <div className="card-body">
                <h5 className="card-title">{movieName}</h5>
                <p className="card-text">#{ranking}</p>
                <button onClick={()=>{handleRemove(id)}} className="btn btn-primary">Remove</button>
            </div>
        </div>
    </div>
)

}
export default MoviesCard