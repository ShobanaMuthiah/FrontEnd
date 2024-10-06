import { Alert, Button, TextInput } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import {app} from '../firebase'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const DashboardProfile = () => {
    
    const {currentuser}=useSelector((state)=>state.user)
  const [image,setImage]=useState(null);
  const [imageurl,setImageurl]=useState(null);
  const [imgfileUpload,setImgfileUpload]=useState(null);
  const [imgfileUploadError,setImgfileUploadError]=useState(null);
  const FilePicRef=useRef();
  useEffect(()=>{
if(image){
    uploadImage()
}
  },[image]);
  const uploadImage=async ()=>{
    setImgfileUploadError(null)
const storage=getStorage(app);
const fileName=new Date().getTime()+image.name;

  }
    return (
        <div className="max-w-lg mx-auto m-4 w-full ">
            <h1 className='my-7 text-center font-semibold text-4xl'>
Profile </h1>
<form className='flex flex-col gap-5'>
    <div className='w-36 h-36  self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
        <img src={currentuser.rest.profile} alt={'user'} className='rounded-full w-full h-full object-cover border-4 dark:border-slate-300 border-zinc-600'/>
    </div>
<TextInput type='text' id='username' placeholder='username' defaultValue={currentuser.rest.username}/>
<TextInput type='email' id='email' placeholder='Email' defaultValue={currentuser.rest.email}/>
<TextInput type='password' id='password' placeholder='******' />
<Button type='submit' gradientDuoTone='redToYellow' outline pill>Update</Button>
</form>
<div className='dark:text-lime-300 text-orange-800 flex justify-between mt-5'>
    <span
    className='cursor-pointer'
    > Delete Account
    </span>
    <span className='cursor-pointer'>
        Sign Out
    </span>
</div>
</div>
    );
};

export default DashboardProfile;