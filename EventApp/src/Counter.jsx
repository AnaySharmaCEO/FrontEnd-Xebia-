import { useState } from "react";   //curlybraces btayenge hook use kiya hai
import { useEffect } from "react";
export default function Counter()
{
    const [count,setCount]=useState(0);      //count is doctor and setcnt is manager of count

    function handleIncrement(){
        setCount(count=>count+1);    //cnt ki state change krni hai
        // console.log(count);
    }
    function handleDecrement(){
        if(count===0){
            alert("Cant decrease now");
            return;
        }
        setCount(count=>count-1);
        // console.log(count);
    }

    useEffect(()=>{console.log("Count updated",count)},[count])
    return(
        <>
        <h1>Counter App</h1>
        <h3>Count={count}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        </>
    );
}

// 🧠 Simple Meaning

// State change karna =
// 👉 React ko bolna ki data ki value update karo

// Example:

// setCount(5);


// Matlab:

// “React, count ki value 5 kar do.”

// ❌ Direct UI change nahi karte

// Plain JS me tum aise karte the:

// document.getElementById("count").innerText = 5;


// Yaha tum directly UI change kar rahe ho.

// ✅ React me kya karte ho?
// setCount(5);


// Yaha tum:

// UI ko touch nahi kar rahe

// Sirf data (state) change kar rahe ho

// React khud:

// Nayi value leta hai

// Component dobara run karta hai

// UI update kar deta hai

// 🔄 Flow samjho

//----------State change → component dobara run
//----------Aur state update async hone ki wajah se old value print hoti hai