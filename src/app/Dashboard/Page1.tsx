import React from 'react'

const Page =() => {
  const [kambing, setKambing] = React.useState("");
  const [cendol, setCendol] = React.useState("");
  const [monyet, setMonyet] = React.useState("halo");
  const Hai= () => {
    alert("alert alert!")
  }
  const changeMonyet = () => {
    setMonyet("welcome to our beautiful country");
  }
  return (
   <>
   <div>
<h1> This page may contain some </h1>
<button className='button' onClick={Hai}> Press </button>
   </div>
   </>
  );
}
export default Page;
