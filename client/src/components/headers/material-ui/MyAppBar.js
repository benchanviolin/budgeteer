/*
http://www.material-ui.com/#/components/app-bar
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';
import logo from '../../../assets/if_aiga_cashier_134157.svg';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
//import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default function MyAppBar(props) {
  return (
    <AppBar
      title={props.title}
      onLeftIconButtonTouchTap={props.onPressLeftMenu}
      iconElementLeft={<IconButton><img className="App-logo" src={logo} alt="logo" /></IconButton>}
      iconElementRight={
        <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Login" />
          <MenuItem primaryText="Sign out" />
        </IconMenu>
      }
    />
  )
};
