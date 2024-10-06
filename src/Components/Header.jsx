import { Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { FaMoon, FaSearch, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toggleTheme } from '../Redux/Slice/ThemeSlice';

const Header = () => {
    const path=useLocation().pathname;
    const dispatch=useDispatch();

   const {currentuser}=useSelector((state)=>state.user)
  const {theme}=useSelector((state)=>state.theme);
   return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap dark:text-white font-semibold text-sm sm:text-xl'>
        <span className='px-2 py-1 rounded text-white bg-gradient-to-r from-green-500 via-lime-400 to-yellow-200'>Blog</span>Hut
        </Link>
<form >
    <TextInput
    type='text'
    placeholder='Search Blogs....'
    rightIcon={ FaSearch }
    className='hidden lg:inline'
    />

</form>
<Button className="w-15 h-10 lg:hidden text-dark" gradientDuoTone="tealToLime" outline pill>
    <FaSearch />
</Button>
<div className='flex gap-2 md:order-2'>
<Button className="w-15 h-10 hidden sm:inline text-dark" 
gradientDuoTone="tealToLime"
 
 onClick={()=>dispatch(toggleTheme())}
 pill>
    {theme==='light'?(
        <FaMoon />
    ): (
<FaSun />
    )}
</Button>
{
currentuser?(

<Dropdown arrowIcon={false} label={
<Avatar alt={currentuser.rest.username} img={currentuser.rest.profile} rounded/>
} inline >
    <DropdownHeader>
        <span className="block text-sm">{currentuser.rest.username}</span>
    </DropdownHeader>
<Link to='/dashboard?tab=profile'>
<Dropdown.Item>Profile</Dropdown.Item>
</Link>
<DropdownDivider/>
<Dropdown.Item>Sign Out</Dropdown.Item>
</Dropdown>

):
(

<Link to='/signin'>
<Button className='' gradientDuoTone="tealToLime" outline pill>
    Sign in
</Button>

</Link>

)

}

<Navbar.Toggle/>
</div>
<Navbar.Collapse>
    <Navbar.Link active={path==="/"} as={"div"}>
        <Link to='/'>Home</Link>
    </Navbar.Link>
<Navbar.Link active={path==="/about"}  as={"div"}>
    <Link to='/about'>About</Link>
</Navbar.Link>
<Navbar.Link active={path==="/blogs"} as={"div"}>
    <Link to='/blogs'>Blogs</Link>
</Navbar.Link>
</Navbar.Collapse>
    </Navbar>
    );
};

export default Header;