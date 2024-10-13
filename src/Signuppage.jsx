// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// function Signuppage() {

//     const [name, setName] = useState("")
//     const [pass, setPass] = useState("")
//     const [conpass, setConpass] = useState("")
//     const navigate = useNavigate()

//     // const handleSignup=(e)=>{
//     //     e.preventDefault();
//     //     console.log(name)
//     //     navigate('/');
//     // }

    
//   return (
//     <div className='flex flex-col items-center justify-center p-5'>
//         <form className='bg-green-800 w-[50vw] p-8 flex flex-col gap-3 rounded-md' >
//         <h1 className='text-xl text-white font-extrabold text-center'>Sign Up Here</h1>
//             <input type="text" placeholder='Enter Your Name' className='p-2 rounded-md' value={name} onChange={(e)=>setName(e.target.value)}/>
//             <input type="password" placeholder='Enter Your Password' className='p-2 rounded-md' value={pass} onChange={(e)=>setPass(e.target.value)}/>
//             <input type="password" placeholder='Confirm Your Password' className='p-2 rounded-md' value={conpass} onChange={(e)=>setConpass(e.target.value)}/>
//             <Link to="/" className='text-center text-green-500 underline'>Already a User?</Link>
            
//             <button className='p-2 rounded-md bg-green-950 text-white font-extrabold' onClick={handleSignup}>Sign Up</button>
//         </form>
//     </div>
//   )
// } 

// export default Signuppage


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signuppage() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [conpass, setConpass] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        // Validate passwords
        if (pass !== conpass) {
            alert("Passwords do not match!");
            return;
        }

        // Create user object
        const userData = {
            name: name,
            password: pass,
        };

        // Save user data to localStorage (or you can send it to a backend)
        localStorage.setItem('userData', JSON.stringify(userData));

        console.log("User data saved:", userData);

        // Clear inputs
        setName('');
        setPass('');
        setConpass('');

        // Navigate to login page or home page
        navigate('/');
    };

    return (
        <div className='flex flex-col items-center justify-center p-5'>
            <form className='bg-green-800 w-[50vw] p-8 flex flex-col gap-3 rounded-md'>
                <h1 className='text-xl text-white font-extrabold text-center'>Sign Up Here</h1>
                <input
                    type="text"
                    placeholder='Enter Your Name'
                    className='p-2 rounded-md'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Enter Your Password'
                    className='p-2 rounded-md'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Confirm Your Password'
                    className='p-2 rounded-md'
                    value={conpass}
                    onChange={(e) => setConpass(e.target.value)}
                />
                <Link to="/" className='text-center text-green-500 underline'>Already a User?</Link>
                
                <button
                    className='p-2 rounded-md bg-green-950 text-white font-extrabold'
                    onClick={handleSignup}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signuppage;