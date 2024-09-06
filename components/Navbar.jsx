import React from 'react';
import FcLogo from '../Images/FC-logo.png';
import '../src/App.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
  return (
    <>
        <div className='main-nav'>
            <img className='main-nav-logo' src={FcLogo} alt=''/>
            <div className='main-nav-sub'>
                <p className='main-nav-sub-opt'>Home</p>
                <p className='main-nav-sub-opt'>Orders</p>
                <p className='main-nav-sub-opt'>Coupons</p>
                <p className='main-nav-sub-opt'>Account</p>
                <button type='submit' className='theme-switcher'><DarkModeIcon sx={{ color: 'white'  }}/></button>
            </div>
        </div>
    </>
  )
}

export default Navbar