import React from 'react'

const Content = () => {
    function handleWordChange(){
        const words=["Hello", "Hi","Dear", "Good Morning"];
        return words[Math.floor(Math.random()*4)]
    }

    const handleCookButtonClick = (event)=>{
        console.log(event)
    }
    
  return (
    <main>
        <p>{handleWordChange()} Prana!</p>
        <button onClick={(e)=>handleCookButtonClick(e)}>Cook</button>
    </main>
  );
}

export default Content