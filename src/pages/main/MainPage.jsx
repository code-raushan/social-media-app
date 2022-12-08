import React, {useState, useEffect} from 'react'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Post from './Post.jsx';
import './MainPage.css'

const MainPage = () => {
  const [postsList, setPostsList]=useState(null)

  //CollectionReference
  const postref = collection(db, 'posts');

  const getPosts = async ()=>{
    const data = await getDocs(postref);
    setPostsList(data.docs.map(doc=>({...doc.data(), id: doc.id})));
  }
  useEffect(()=>{
    getPosts();
  })

  return (
      <div className='feed'>
        {postsList?.map((post)=>(<Post post={post}/>))}
      </div>
    )
}

export default MainPage