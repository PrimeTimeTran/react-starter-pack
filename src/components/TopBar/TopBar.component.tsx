import React, { Component, ReactNode } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { i18n } from 'utils/lib/i18n';
import 'assets/style.scss';

export class TopBar extends Component<{}> {
  public render(): ReactNode {
    return (
      <>
        <AppBar position="fixed">
          <Toolbar>
            <Typography className="title" variant="h6" noWrap>
              {i18n.t('general.title')}
            </Typography>
            <div className="search">
              <div className="search-icon">
                <SearchIcon />
              </div>
              <InputBase
                className="input-wrapper"
                placeholder={i18n.t('general.search')}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className="section-desktop">
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="show 17 new notifications"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                color="inherit"
                aria-haspopup="true"
                aria-label="account of current user"
                onClick={() => {
                  return;
                }}
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
