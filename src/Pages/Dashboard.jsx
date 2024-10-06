import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardProfile from '../Components/DashboardProfile';
import DashboardSidbar from '../Components/DashboardSidbar';
const Dashboard = () => {
    const location=useLocation();
    const [tab,setTab]=useState('');
    useEffect(()=>{
const urlParams=new URLSearchParams(location.search);
const tabURL=urlParams.get('tab');
if(tabURL){
    setTab(tabURL)
}
    },[location.search])
    return (
        <div className='min-h-screen flex flex-col md:flex-row '>
            <div className='md:w-58'>
<DashboardSidbar />
            </div>
            {tab==='profile' && <DashboardProfile /> }
        </div>
    );
};

export default Dashboard;