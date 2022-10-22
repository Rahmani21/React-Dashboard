import "./widgets.scss";
import React from "react";

// MUI icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';





const Widgets = ({type}) => {

    let data;


    // temporary 
    const amount = 100
    const diff = 20
    switch(type){
        case 'users':
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon:(
                    <PersonOutlineIcon className="icons" style={{color:'crimson', backgroundColor:"rgba(255,0,0,0.2)"}}/>
                )
            };
            break
            case 'orders':
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon:(
                    <ShoppingCartOutlinedIcon className="icons" style={{color:'goldenrod', backgroundColor:"rgba(218,165,32,0.2)"}}/>
                )
            };
            break
            case 'earning':
            data = {
                title: "EARNING",
                isMoney: true,
                link: "View net earning",
                icon:(
                    <MonetizationOnOutlinedIcon className="icons" style={{color:'green', backgroundColor:"rgba(0,128,0,0.2)"}}/>
                )
            };
            break
            case 'balance':
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon:(
                    <AccountBalanceWalletOutlinedIcon className="icons" style={{color:'purple', backgroundColor:"rgba(128,0,128,0.2)"}} />
                )
            };
            break
            default:
                break
            
    }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$" } {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}
        </div>
        {data.icon}

      </div>
    </div>
  );
};

export default Widgets;
