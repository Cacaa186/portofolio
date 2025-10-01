import React from 'react'

export default function page() {
  return (
    <>
      <div className='bg-lime-100 flex flex-col'>
        <div className=' justify-center items-center p-4'>
          <h1 className='text-emerald-700 text-4xl font-serif ml-130'> Welcome to our company</h1>
          <span className='text-black text-sm'> <a href='#' > About </a></span>
          <span className='text-black text-sm m-2'> <a href='#' > Contact </a></span>
          <span className='text-black text-sm m-2'> <a href='#' > Help </a></span>
        </div>
      </div>


      <div className='bg-lime-200 flex flex-col mt-40 ml-130 w-100 rounded-md p-15 gap-4 items-center'>
        <h1 className='text-black text-center text-3xl'> Sign in </h1>
        <input type='text'
          required
          pattern='(a-z),(0-9),(.,_-)'
          placeholder='Username/Email'
          className='border-2 border-black rounded-md text-black text-center w-80 border-solid bg-gray-200 items-center ' />
        <input type='text' required
          pattern='(a-z),(0-9)'
          placeholder='Password'
          className='border-2 border-black rounded-md text-black text-center w-80 border-solid bg-gray-200 items-center' />
          <div className='gap-2'>
          <p className='text-black mr-13'> Forgot your password? <span className='text-blue-300'> <a href='#' > Reset it! </a></span></p>
          <div className='gap-2 mr-39'>
            <input type='checkbox' className='text-black' /> <label className='text-black'> Remember me </label>
          </div>
          </div>
        <button type='submit' className='bg-white text-black rounded-full border-2 border-black w-80'>  Login </button>
        <div>
          <br />
          <p className='text-black'> Don't have an account? <span className='text-blue-300'> <a href='#' > Sign up! </a> </span></p>
        </div>
      </div>
    </>
  )
}