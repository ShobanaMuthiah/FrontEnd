import React, { useEffect, useState } from 'react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';


const DashboardSidbar = () => {
    const location=useLocation();
    const [tab,setTab]=useState('');
    useEffect(()=> {
const urlParams=new URLSearchParams(location.search);
const tabURL=urlParams.get('tab');
if(tabURL){
    setTab(tabURL)
}
    },[location.search])
    return (
        <Sidebar className='w-full md:w-58'>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to='/dashboard?tab=profile'>
                    <Sidebar.Item active={tab==='profile'} icon={HiUser} label={'User'} labelColor='dark'>
Profile
                    </Sidebar.Item></Link>
                    <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
                        Sign Out
                        
                    </Sidebar.Item>
                    
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};

export default DashboardSidbar;