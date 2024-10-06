import { Button } from 'flowbite-react';
import React from 'react';
import { AiFillGooglePlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import { signInFailure, signInSuccess } from '../Redux/Slice/UserSlice';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
const OAuth = () => {
const auth=getAuth(app);
const dispatch=useDispatch();
const navigate=useNavigate()
    const handleSubmit=async()=>{
const provider=new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
try{
    const result=await signInWithPopup(auth,provider);
    const res=await fetch("http://localhost:5000/api/google",{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            
        },
        body:JSON.stringify({
            name: result.user.displayName,
                   email: result.user.email,
                   profile:result.user.photoURL
        })
    })
    const data=await res.json();
if(res.ok){
    dispatch(signInSuccess(data));
    navigate('/')
}
}
catch(error){
    dispatch(signInFailure(error.message))
}

    }

    return (
          <Button type='button' gradientDuoTone="tealToLime" onClick={handleSubmit}>
            <AiFillGooglePlusCircle className='w-6 h-6 mr-2'/>
            continue with google
          </Button>
    );
};

export default OAuth;