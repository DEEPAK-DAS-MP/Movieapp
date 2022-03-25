import React from "react";
 const MoviesStats=(props)=>{
     const {moviesStore}=props
     const sorted=[...moviesStore].sort((b,a)=>b.ranking-a.ranking)
     return (
         <div className=" ">
             <div className="card border-sucess mb-3" style={{width:'18rem'}}>
                 <div className="card-header bg-transparent border-sucess"><h3>Movie Stats</h3>
                 <div className="card-body text-sucess">
                     <h5 className="card-title">Total movies-{moviesStore.length}</h5>
                     <p className="card-text"># Top Ranked Movie {sorted.length>0 && `-${sorted[0].movieName}`}</p>
                 </div>

                 </div>
             </div>

         </div>
     )
 }
 export default MoviesStats