
import React from 'react'
import { useNavigate } from 'react-router-dom'



const About = () => {
    const navigate = useNavigate();
    function clickHandler() {
        //move to support
        navigate("/support")
    }
  return (
    <div>
        <div>
        This is About page
        </div>
        <button onClick={clickHandler}>Move to Support page</button>
    </div>
   
  )
}

export default About