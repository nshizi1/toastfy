import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function Form() {
    

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirectToFacebook, setRedirectToFacebook] = useState(false);

    const handleFirstNameChange = (event) =>{
        setFirstName(event.target.value);
    }
    
    const handleLastNameChange = (event) =>{
        setLastName(event.target.value);
    }
    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }
    const handleUserNameChange = (event) =>{
        setUserName(event.target.value);
    }
    const handleAgeChange = (event) =>{
        setAge(event.target.value);
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordChange = (event) =>{
        setConfirmPassword(event.target.value);
    }
    
    const register = (event) => {
        event.preventDefault();
        // console.log(firstName, lastName, email, userName, age, password, confirmPassword);
        if(firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || userName.trim() === '' || age.trim() === '' || password.trim() === '' || confirmPassword.trim() === ''){
            toast.info("Please fill out all the fields", {
                position: "top-center",
                autoClose: 3000,
            });
        }else if(parseInt(age)<18){
            toast.warning(`${lastName}, you can't register if you are under 18 years`, {
                position: "top-center",
                autoClose: 3000,
            });
        }else if(password!==confirmPassword){
            toast.error("Passwords don't match", {
                position: "top-center",
                autoClose: 3000,
            });
        }else{
            toast.success(`${firstName} ${lastName} has been registered`, {
                autoClose: 3000,
            });
            setRedirectToFacebook(true);
        }
    }

    useEffect(() => {
        if (redirectToFacebook) {
          // Redirect to Facebook after the success message is displayed
          const redirectTimer = setTimeout(() => {
            window.location.href = 'https://www.facebook.com';
          }, 3000); // Redirect after 3 seconds (adjust the time as needed)
    
          return () => clearTimeout(redirectTimer); // Clear the timer on component unmount
        }
      }, [redirectToFacebook]);

  return (
    <main>
        <form>
            <h1>Register a Student</h1>
            <label>First Name</label>
            <input type='text' value={firstName} onChange={handleFirstNameChange} /><br/>

            <label>Last Name</label>
            <input type='text' value={lastName} onChange={handleLastNameChange} /><br/>

            <label>Email</label>
            <input type='text' value={email} onChange={handleEmailChange} /><br/>

            <label>Username</label>
            <input type='text' value={userName} onChange={handleUserNameChange} /> <br/>

            <label>Age</label>
            <input type='number' value={age} onChange={handleAgeChange} /><br/>

            <label>Password</label>
            <input type='password' value={password} onChange={handlePasswordChange} /><br/>

            <label>Confirm Password</label>
            <input type='password' value={confirmPassword} onChange={handleConfirmPasswordChange} /><br/>

            <button type="button" onClick={register}>Sign Up</button>
        </form>
        <ToastContainer />
    </main>
  )
}

export default Form;