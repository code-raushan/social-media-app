import {useForm} from 'react-hook-form';
import './createForm.css'
import * as yup from 'yup';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../config/firebase'
import {yupResolver} from '@hookform/resolvers/yup'
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../../config/firebase'
import {useNavigate} from 'react-router-dom'

export const CreateForm = ()=>{
    const navigate = useNavigate()
    const [user]=useAuthState(auth)
    //schema for the form validation
    const schema = yup.object().shape({
        title: yup.string().required("Please add a title."),
        description: yup.string().required("Please write something").min(1).max(500)
    });
    //useForm hook
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    
    //collection reference
    const postRef = collection(db, "posts"); 
    
    //addDoc(ref, data): Add a new document to specified CollectionReference with the given data, assigning it a document ID automatically.
    const onCreatePost = async(data) =>{
        await addDoc(postRef, {
            title: data.title,
            description: data.description,
            username: user?.displayName,
            userId: user?.uid
        })
        navigate('/');
    }
    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input className='titleInput' placeholder="Title" {...register("title")} />
            <p style={{ color: "red" }}> {errors.title?.message}</p>
            <textarea placeholder="Description" {...register("description")} />
            <p style={{ color: "red" }}> {errors.description?.message}</p>
            <input className='submitbtn' type="submit" />
    </form>
    )
}
    