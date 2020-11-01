import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import GroupIcon from "@material-ui/icons/Group";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/svg/145/145802.svg"
          className="header__left--logo"
          alt="logo"
        />
        <div className="header__left--input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__center--options header__center--options--active">
          <HomeIcon />
        </div>
        <div className="header__center--options">
          <SubscriptionsIcon />
        </div>
        <div className="header__center--options">
          <StorefrontIcon />
        </div>
        <div className="header__center--options">
          <GroupIcon />
        </div>
        <div className="header__center--options">
          <SportsEsportsIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="header__right--infor">
          <Avatar />
          <h4>Linh</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
