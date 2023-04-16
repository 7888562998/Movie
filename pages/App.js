import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import {getPosts} from "./features/counter/postSlice";


function Card() {
   const count = useSelector((state) => state.counters.value)
   const {posts,loading} = useSelector((state) => state.post)
   const dispatch=useDispatch();
   useEffect(()=>{
   dispatch(getPosts())
 },[])
 
 
 if (posts.items===undefined) {
   return <h1>Loading....{typeof posts}</h1>
 }
   return ( 
   <div className='mainContainer' >
   {posts.items.map((value)=>{
return (
  <>
  <div className='main'>
    {/* <div className='child1'> */}
    <img
      src={`https://image.tmdb.org/t/p/w300${value.poster_path}`}
      alt="Picture of the author"
      // width={500}
      // height={404.5}
    />
   
      {/* </div> */}
    <div className='child2'>
    <h4 style={{color:'#0099ff'}}>{value.original_title}</h4>
    <p>{value.overview}</p>
    </div>
    </div>
      </>
)
   })}
     </div>
   )
}
export default Card;