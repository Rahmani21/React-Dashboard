import React from 'react'
import './sidebar.scss'

// Material UI Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'><span className='logo'>Admin</span></div>
            <hr />
            <div className='center'>
                <ul>
                <p className='title'>MAIN</p>
                <li>
                <DashboardIcon className='icons'/>
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LIST</p>
                    <li>
                    <PersonOutlineOutlinedIcon  className='icons' />
                        <span>Users</span>
                    </li>
               
                    <li>
                        <StoreIcon className='icons' />
                        <span>Products</span>
                    </li> 
                    <li>
                        <CreditCardIcon className='icons' />
                        <span>Orders</span>
                    </li>
                    <li>
                    <LocalShippingIcon className='icons' />
                        <span>Delivery</span>
                    </li>
                    <p className='title'>USEFULL LINKS</p>
                    <li>
                        <InsertChartIcon className='icons' />
                        <span>States</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='icons' />
                        <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className='icons' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icons' />
                        <span>Logs</span>
                    </li>
                    <li>
                        < SettingsApplicationsIcon className='icons' />
                        <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icons' />
                        <span>Profile</span>
                    </li>
                    <li>
                        < ExitToAppIcon className='icons' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className='colorOption'></div>
                <div className='colorOption'></div>
                {/* <div className='colorOption'></div> */}
            </div>
        </div>
    )
}

export default Sidebar