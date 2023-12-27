import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

// function App(){
//   const success = () => toast.success("Success message !");
//   const information = () => toast.info("Information message !");

//   const perform = () =>{
//     toast.success("Learning toast notifications");
//   }

//   return (
//     <div>
//       <button onClick={success}>Success !</button>
//       <button onClick={information}>Information !</button>

//       <button onClick={perform}>Simple button</button>
//       <ToastContainer />

//       <form>
//         <label>Names:</label>
//         <input type='text' id='name'></input><br></br>
//         <label>Age:</label>
//         <input type='number' id='age'></input><br></br>
//         <button onClick={vote}>Check vote</button>
//       </form>
//     </div>
//   );
// }
// export default App;

const Toasting = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const vote = () => {
    if(name.trim()==='' || age.trim()===''){
      toast.info(`Please fill out all the fields !`);
    }else if (parseInt(age) >= 18) {
      toast.success(`Hello ${name}, You are allowed to vote !`);
    } else if(parseInt(age)<=0){
      toast.warning(`Hello ${name}, You can't vote when 0 or less than 0 years!`);
    } else {
      toast.error(`Hello ${name}, Your are not allowed to vote !`);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor='age'>Age:</label>
        <input
          type='number'
          value={age}
          onChange={handleAgeChange}
        />
        <br />
        <button type='button' onClick={vote}>
          Check vote
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Toasting;