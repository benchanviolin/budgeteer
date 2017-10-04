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

const menuItems = [
  {
    name: 'Login',
    conditions: [
      'logged-in': false
    ],
  },
  {
    name: 'Logout',
    conditions: [
      'logged-in': true
    ]
  }
];

export default function MyAppBar(props) {
  return (
    <AppBar
      title={
        <a className="App-a" href="">
          <img className="App-logo" src={logo} alt="logo" />
          <span className="App-title">{props.title}</span>
        </a>
      }
      onLeftIconButtonTouchTap={props.onPressLeftMenu}
      iconElementLeft={
        <IconButton>
        </IconButton>
      }
      iconElementRight={
        <div>
          <span class="App-menu-items">
          {menuItems.map((item, key) => 1 == 1
            ? <span class="App-menu-item" key={key}>{item.name}</span>
            : ''
          )}
          </span>
          <IconMenu
            iconButtonElement={
              <IconButton>
                <MoreVertIcon className="App-vertical-icon" />
              </IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            {menuItems.map((item, key) => 1 == 1
              ? <MenuItem key={key} primaryText={item.name} />
              : ''
            )}
          </IconMenu>
        </div>
      }
    />
  )
};
