import React, {useState} from 'react';

// const [setOpen] = useState(false);



const NavBar = ({setOpen}) => {
  
  
    return (
    <NavContainer>
        <h2>Dev Somtochukwu</h2>
        <button onClick={() => {
            setOpen(true);
        }}> Create Repository</button>
    </NavContainer>
  )
}

export default NavBar;