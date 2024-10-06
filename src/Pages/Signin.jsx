import { Alert, Button, Label, Spinner, TextInput, Toast, ToastToggle } from 'flowbite-react';
import React, { useState } from 'react';
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart,signInSuccess,signInFailure } from '../Redux/Slice/UserSlice';
import OAuth from '../Components/OAuth';
const Signin = () => {
    const [formData,setFormData]=useState({});
    const navigate=useNavigate();

 const dispatch=useDispatch();
 const {loading,error:errorMsg}=useSelector((state)=>state.user )
    const handleChange=(e)=>{
        e.target.value;
        setFormData({...formData,[e.target.id]:e.target.value.trim()})
    
    }
   
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if( !formData.email || !formData.password){
            return dispatch(signInFailure("Fill out the Fields"))
        }
        try{
            dispatch(signInStart());
            const response=await fetch("http://localhost:5000/api/login-auth",{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(formData)
            })
            const data=await response.json();
            if(data.success===false){
               return dispatch(signInFailure(data.message))


            }
            if(response.ok){
                 dispatch(signInSuccess(data.message));
                navigate('/signup');

            }
        }
        catch(error){
        dispatch(signInFailure(error.message))

        }
    }

    return (
        <div className='min-h-screen mt-20'>
            {errorMsg && <>
            <div className="flex justify-end">
            <Toast >
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">{errorMsg}</div>
        <ToastToggle />
      </Toast>
            </div>
            </>}

           <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-4'>
            <div className='flex-1'>
            <div  className='font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 rounded text-white bg-gradient-to-r from-green-500 via-lime-400 to-yellow-200'>Blog</span>Hut
        </div>
        <p className='text-sm mt-6'>
            you can sign in with your Email and password or you can use the Google. **This is the demo project**
        </p>
            </div>
            <div className='flex-1'>
            
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
         
                    <div>
                        <Label value="email"/>
                        <TextInput type='email' onChange={handleChange} placeholder='abcd@company.com' id="email"/>
                

                    </div>
                    <div>
                        <Label value="password"/>
                        <TextInput onChange={handleChange} type='password' placeholder='Enter your password' id="password"/>

                    </div>
                    <Button gradientDuoTone="tealToLime" type='submit' disabled={loading}>{loading?(<>
                        <Spinner color="success" aria-label="Success spinner example" size="sm"/>
                        <span className='pl-3'>Loading...</span>
                    </>):(
                        'Sign in'
                    )}
                    </Button>
                    <OAuth/>
                </form>
                <div className="flex gap-2 text-sm mt-6">
                    <span>Don't have an Account?</span>
                    <Link to='/signup' className='text-amber-600'>Sign up</Link>
                </div>
             
            </div>
           </div>
        </div>
    );
};

export default Signin;